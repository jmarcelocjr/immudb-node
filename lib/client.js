const grpc = require('grpc')
const empty = require('google-protobuf/google/protobuf/empty_pb');

const messages = require('../proto/schema_pb')
const services = require('../proto/schema_grpc_pb')
const util = require('./util')
const proofs = require('./proofs')
const root = require('./root')

let client, metadata, activeDatabase, serverName

const ImmudbClient = (config, callback) => {
  let auth = grpc.credentials.createInsecure()
  if (config.certs) {
    auth = grpc.credentials.createSsl(config.certs);
  }

  client = new services.
    ImmuServiceClient(config.address, auth)

  metadata = new grpc.Metadata()

  const methods = {
    login,
    set,
    get,
    createDatabase,
    useDatabase,
    changePermission,
    listDatabases,
    listUsers,
    createUser,
    changePassword,
    logout,
    setActiveUser,
    printTree,
    health,
    setSV,
    getSV,
    count,
    scan,
    scanSV,
    byIndex,
    byIndexSV,
    history,
    historySV,
    zScan,
    zScanSV,
    iScan,
    iScanSV,
    currentRoot,
    zAdd,
    reference,
    setBatchSV,
    setBatch,
    getBatch,
    getBatchSV,
    safeSet,
    safeGet,
    safeSetSV,
    safeGetSV,
    updateAuthConfig,
    updateMTLSConfig,
    safeZAdd,
    inclusion,
    consistency,
    bySafeIndex,
  }

  health({}, (err) => {
    if (err) {
      return callback(err)
    }
    callback(null, methods)
  })
}

const login = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(login, params)
  }

  const req = new messages.LoginRequest()
  req.setUser(util.utf8Encode(params.username))
  req.setPassword(util.utf8Encode(params.password))

  client.login(req, (err, res) => {
    if (err) {
      err.clientErr = 'Login error'
      return callback(err)
    }

    const token = res.getToken()
    metadata.remove('authorization')
    metadata.add('authorization', 'Bearer ' + token)
    callback(null, {
      token: token,
      warning : util.utf8Decode(res.getWarning())
    })
  })
}

const createDatabase = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(createDatabase, params)
  }

  const req = new messages.Database();
  req.setDatabasename(params.database)
  client.createDatabase(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Create database error'
      return callback(err)
    }
    callback()
  })
}

const useDatabase = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(useDatabase, params)
  }

  const req = new messages.Database();
  req.setDatabasename(params.database)
  client.useDatabase(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Use database error'
      return callback(err)
    }
    const token = res.getToken()
    metadata.remove('authorization')
    metadata.add('authorization', 'Bearer ' + token)
    activeDatabase = params.database

    currentRoot({}, (err) => {
      if (err) {
        return callback(err)
      }

      callback(null, {
        token: token,
      })
    })
  })
}

const set = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(set, params)
  }

  const req = new messages.KeyValue()
  req.setKey(util.utf8Encode(params.key))
  req.setValue(util.utf8Encode(params.value))

  client.set(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Set error'
      return callback(err)
    }

    callback(null, {
      index: res.getIndex(),
    })
  })
}

const get = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(get, params)
  }

  const req = new messages.Key()
  req.setKey(util.utf8Encode(params.key))

  client.get(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Get error'
      return callback(err)
    }

    callback(null, {
      key : util.utf8Decode(res.getKey()),
      value : util.utf8Decode(res.getValue()),
      index: res.getIndex(),
    })
  })
}

const listDatabases = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(listDatabases, params)
  }

  const req = new empty.Empty()

  client.databaseList(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'List databases error'
      return callback(err)
    }

    const dl = res.getDatabasesList()
    const l = []
    for (let i = 0; i < dl.length; i++) {
      l.push(dl[i].getDatabasename())
    }

    callback(null, {
      databases : l,
    })
  })
}

const changePermission = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(changePermission, params)
  }

  const req = new messages.ChangePermissionRequest()
  req.setAction(messages.PermissionAction[params.action])
  req.setPermission(params.permission)
  req.setUsername(params.username)
  req.setDatabase(params.database)

  client.changePermission(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Change permission error'
      return callback(err)
    }

    callback()
  })
}

const listUsers = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(listUsers, params)
  }

  const req = new empty.Empty()

  client.listUsers(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'List users error'
      return callback(err)
    }

    const ul = res.getUsersList()
    const l = []
    for (let i = 0; i < ul.length; i++) {
      let u = ul[i]

      const pl = u.getPermissionsList()
      const p = []
      for (let j = 0; j < pl.length; j++) {
        p.push({
          database: pl[j].getDatabase(),
          permission: pl[j].getPermission(),
        })
      }

      l.push({
        username: util.utf8Decode(u.getUser()),
        permissions: p,
        createdBy: u.getCreatedby(),
        createdAt: u.getCreatedat(),
        active: u.getActive(),
      })
    }

    callback(null, {
      users : l,
    })
  })
}

const createUser = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(createUser, params)
  }

  const req = new messages.CreateUserRequest()
  req.setUser(util.utf8Encode(params.username))
  req.setPassword(util.utf8Encode(params.password))
  req.setPermission(params.permission)
  req.setDatabase(params.database)

  client.createUser(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Create user error'
      return callback(err)
    }

    callback()
  })
}

const changePassword = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(changePassword, params)
  }

  const req = new messages.ChangePasswordRequest()
  req.setUser(util.utf8Encode(params.username))
  req.setOldpassword(util.utf8Encode(params.old))
  req.setNewpassword(util.utf8Encode(params.new))

  client.changePassword(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Change password error'
      return callback(err)
    }

    callback()
  })
}

const logout = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(logout, params)
  }

  const req = new empty.Empty()
  client.logout(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Logout error'
      return callback(err)
    }

    callback()
  })
}

const setActiveUser = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(setActiveUser, params)
  }

  const req = new messages.SetActiveUserRequest()
  req.setUsername(params.username)
  req.setActive(params.active)

  client.setActiveUser(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Set active user error'
      return callback(err)
    }

    callback()
  })
}

const printTree = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(printTree, params)
  }

  const req = new empty.Empty()

  client.printTree(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Print tree error'
      return callback(err)
    }

    const result = []
    const tl = res.getTList()
    for (let i = 0; i < tl.length; i++) {
      let layer = tl[i]

      const ll = layer.getLList()
      const nodes = []
      for (let j = 0; j < ll.length; j++) {
        let node = ll[j]

        let refk = node.getRefk() == '' ? node.getRefk() :
          util.utf8Decode(node.getRefk())

        nodes.push({
          h: util.base64Encode(node.getH()),
          i: util.base64Encode(node.getI()),
          refk:  refk,
          ref: node.getRef(),
          cache: node.getCache(),
          root: node.getRoot(),
        })
      }

      result.push(nodes)
    }

    callback(null, {
      tree: result,
    })
  })
}

const health = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(health, params)
  }

  const req = new empty.Empty()

  const call = client.health(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Health error'
      return callback(err)
    }

    callback(null, {
      status: res.getStatus(),
      version: res.getVersion(),
    })
  })

  call.on('metadata', (meta) => {
    serverName = meta.get('immudb-uuid')[0]
  })
}

const setSV = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(setSV, params)
  }

  const req = new messages.StructuredKeyValue()
  const content = new messages.Content()
  req.setKey(util.utf8Encode(params.key))
  content.setTimestamp(params.timestamp)
  content.setPayload(util.utf8Encode(params.payload))
  req.setValue(content)

  client.setSV(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Set SV error'
      return callback(err)
    }

    callback(null, {
      index: res.getIndex(),
    })
  })
}

const getSV = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(getSV, params)
  }

  const req = new messages.Key()
  req.setKey(util.utf8Encode(params.key))

  client.getSV(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Get SV error'
      return callback(err)
    }

    const content = res.getValue()
    callback(null, {
      key : util.utf8Decode(res.getKey()),
      timestamp: content.getTimestamp(),
      payload : util.utf8Decode(content.getPayload()),
    })
  })
}

const count = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(count, params)
  }

  const req = new messages.KeyPrefix()
  req.setPrefix(util.utf8Encode(params.keyPrefix))

  client.count(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Count error'
      return callback(err)
    }

    callback(null, {
      count : res.getCount(),
    })
  })
}

const scan = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(scan, params)
  }

  const req = new messages.ScanOptions()
  req.setPrefix(util.utf8Encode(params.keyPrefix))
  req.setOffset(util.utf8Encode(params.offset))
  req.setLimit(params.limit)
  req.setReverse(params.reverse)
  req.setDeep(params.deep)

  client.scan(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Scan error'
      return callback(err)
    }

    const result = []
    const il = res.getItemsList()
    for (let i = 0; i < il.length; i++) {
      let item = il[i]
      result.push({
        key: util.utf8Decode(item.getKey()),
        value: util.utf8Decode(item.getValue()),
        index: item.getIndex(),
      })
    }


    callback(null, {
      items : result,
    })
  })
}

const byIndex = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(byIndex, params)
  }

  const req = new messages.Index()
  req.setIndex(params.index)

  client.byIndex(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'By index error'
      return callback(err)
    }

    callback(null, {
      key: util.utf8Decode(res.getKey()),
      value: util.utf8Decode(res.getValue()),
      index: res.getIndex(),
    })
  })
}

const byIndexSV = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(byIndexSV, params)
  }

  const req = new messages.Index()
  req.setIndex(params.index)

  client.byIndexSV(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'By index SV error'
      return callback(err)
    }

    const content = res.getValue()
    callback(null, {
      key: util.utf8Decode(res.getKey()),
      payload: util.utf8Decode(content.getPayload()),
      timestamp: content.getTimestamp(),
      index: res.getIndex(),
    })
  })
}

const scanSV = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(scanSV, params)
  }

  const req = new messages.ScanOptions()
  req.setPrefix(util.utf8Encode(params.keyPrefix))
  req.setOffset(util.utf8Encode(params.offset))
  req.setLimit(params.limit)
  req.setReverse(params.reverse)
  req.setDeep(params.deep)

  client.scanSV(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Scan SV error'
      return callback(err)
    }

    const result = []
    const il = res.getItemsList()
    for (let i = 0; i < il.length; i++) {
      let item = il[i]
      const content = item.getValue()
      result.push({
        key: util.utf8Decode(item.getKey()),
        payload: util.utf8Decode(content.getPayload()),
        index: item.getIndex(),
        timestamp: content.getTimestamp(),
      })
    }


    callback(null, {
      items : result,
    })
  })
}

const history = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(history, params)
  }

  const req = new messages.Key()
  req.setKey(util.utf8Encode(params.key))

  client.history(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'History error'
      return callback(err)
    }

    const result = []
    const il = res.getItemsList()
    for (let i = 0; i < il.length; i++) {
      let item = il[i]
      result.push({
        key: util.utf8Decode(item.getKey()),
        value: util.utf8Decode(item.getValue()),
        index: item.getIndex(),
      })
    }


    callback(null, {
      items : result,
    })
  })
}

const historySV = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(historySV, params)
  }

  const req = new messages.Key()
  req.setKey(util.utf8Encode(params.key))

  client.historySV(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'History SV error'
      return callback(err)
    }

    const result = []
    const il = res.getItemsList()
    for (let i = 0; i < il.length; i++) {
      let item = il[i]
      const content = item.getValue()
      result.push({
        key: util.utf8Decode(item.getKey()),
        payload: util.utf8Decode(content.getPayload()),
        index: item.getIndex(),
        timestamp: content.getTimestamp(),
      })
    }


    callback(null, {
      items : result,
    })
  })
}

const zScan = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(zScan, params)
  }

  const req = new messages.ZScanOptions()
  req.setSet(util.utf8Encode(params.set))
  req.setOffset(util.utf8Encode(params.offset))
  req.setLimit(params.limit)
  req.setReverse(params.reverse)

  client.zScan(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'zScan error'
      return callback(err)
    }

    const result = []
    const il = res.getItemsList()
    for (let i = 0; i < il.length; i++) {
      let item = il[i]
      result.push({
        key: util.utf8Decode(item.getKey()),
        value: util.utf8Decode(item.getValue()),
        index: item.getIndex(),
      })
    }


    callback(null, {
      items : result,
    })
  })
}

const zScanSV = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(zScanSV, params)
  }

  const req = new messages.ZScanOptions()
  req.setSet(util.utf8Encode(params.set))
  req.setOffset(util.utf8Encode(params.offset))
  req.setLimit(params.limit)
  req.setReverse(params.reverse)

  client.zScanSV(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'zScan SV error'
      return callback(err)
    }

    const result = []
    const il = res.getItemsList()
    for (let i = 0; i < il.length; i++) {
      let item = il[i]
      const content = item.getValue()
      result.push({
        key: util.utf8Decode(item.getKey()),
        payload: util.utf8Decode(content.getPayload()),
        index: item.getIndex(),
        timestamp: content.getTimestamp(),
      })
    }


    callback(null, {
      items : result,
    })
  })
}

const iScan = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(iScan, params)
  }

  const req = new messages.IScanOptions()
  req.setPagesize(params.pageSize)
  req.setPagenumber(params.pageNumber)

  client.iScan(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'iScan error'
      return callback(err)
    }

    const result = []
    const il = res.getItemsList()
    for (let i = 0; i < il.length; i++) {
      let item = il[i]
      result.push({
        key: util.utf8Decode(item.getKey()),
        value: util.utf8Decode(item.getValue()),
        index: item.getIndex(),
      })
    }


    callback(null, {
      items : result,
      more: res.getMore(),
    })
  })
}

const iScanSV = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(iScanSV, params)
  }

  const req = new messages.IScanOptions()
  req.setPagesize(params.pageSize)
  req.setPagenumber(params.pageNumber)

  client.iScanSV(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'iScan SV error'
      return callback(err)
    }

    const result = []
    const il = res.getItemsList()
    for (let i = 0; i < il.length; i++) {
      let item = il[i]
      const content = item.getValue()
      result.push({
        key: util.utf8Decode(item.getKey()),
        value: util.utf8Decode(content.getPayload()),
        index: item.getIndex(),
        timestamp: content.getTimestamp(),
      })
    }


    callback(null, {
      items : result,
      more: res.getMore(),
      pageNum: res.getPagenum(),
    })
  })
}

const currentRoot = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(currentRoot, params)
  }

  const req = new empty.Empty()

  client.currentRoot(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Current root error'
      return callback(err)
    }

    root.set({
      server: serverName,
      database: activeDatabase,
      index: res.getIndex(),
      root: res.getRoot(),
    })

    callback(null, {
      index: res.getIndex(),
      root: res.getRoot(),
    })
  })
}

const zAdd = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(zAdd, params)
  }

  const req = new messages.ZAddOptions()
  req.setSet(util.utf8Encode(params.set))
  req.setScore(params.score)
  req.setKey(util.utf8Encode(params.key))

  client.zAdd(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'zAdd error'
      return callback(err)
    }

    callback(null, {
      index: res.getIndex(),
    })
  })
}

const reference = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(reference, params)
  }

  const req = new messages.ReferenceOptions()
  req.setReference(util.utf8Encode(params.reference))
  req.setKey(util.utf8Encode(params.key))

  client.reference(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Reference error'
      return callback(err)
    }

    callback(null, {
      index: res.getIndex(),
    })
  })
}

const setBatchSV = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(setBatchSV, params)
  }

  const skv = new messages.StructuredKeyValue() 
  const l = []
  for (let i = 0; i < params.skvList.length; i++) {
    const content = new messages.Content()
    content.setTimestamp(params.skvList[i].timestamp)
    content.setPayload(
      util.utf8Encode(params.skvList[i].payload))
    skv.setKey(util.utf8Encode(params.skvList[i].key))
    skv.setValue(content)
    l.push(skv)
  }

  const req = new messages.SKVList()
  req.setSkvsList(l)

  client.setBatchSV(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Set batch SV error'
      return callback(err)
    }

    callback(null, {
      index: res.getIndex(),
    })
  })
}

const setBatch = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(setBatch, params)
  }

  const req = new messages.KVList()

  const kv = new messages.KeyValue() 
  const l = []
  for (let i = 0; i < params.kvList.length; i++) {
    kv.setKey(util.utf8Encode(params.kvList[i].key))
    kv.setValue(util.utf8Encode(params.kvList[i].value))
    l.push(kv)
  }

  req.setKvsList(l)

  client.setBatch(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Set batch error'
      return callback(err)
    }

    callback(null, {
      index: res.getIndex(),
    })
  })
}

const getBatch = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(getBatch, params)
  }

  const key = new messages.Key()
  const l = []
  for (let i = 0; i < params.keys.length; i++) {
    key.setKey(util.utf8Encode(params.keys[i].key))
    l.push(key)
  }

  const req = new messages.KeyList()
  req.setKeysList(l)

  client.getBatch(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Get batch error'
      return callback(err)
    }

    const result = []
    const il = res.getItemsList()
    for (let i = 0; i < il.length; i++) {
      let item = il[i]
      result.push({
        key: util.utf8Decode(item.getKey()),
        value: util.utf8Decode(item.getValue()),
        index: item.getIndex(),
      })
    }


    callback(null, {
      items : result,
    })
  })
}

const getBatchSV = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(getBatchSV, params)
  }

  const key = new messages.Key()
  const l = []
  for (let i = 0; i < params.keys.length; i++) {
    key.setKey(util.utf8Encode(params.keys[i].key))
    l.push(key)
  }

  const req = new messages.KeyList()
  req.setKeysList(l)

  client.getBatchSV(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Get batch SV error'
      return callback(err)
    }
    const result = []
    const il = res.getItemsList()
    for (let i = 0; i < il.length; i++) {
      let item = il[i]
      const content = item.getValue()
      result.push({
        key: util.utf8Decode(item.getKey()),
        payload: util.utf8Decode(content.getPayload()),
        index: item.getIndex(),
        timestamp: content.getTimestamp(),
      })
    }


    callback(null, {
      items : result,
    })
  })
}

const safeSet = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(safeSet, params)
  }

  const kv = new messages.KeyValue()
  kv.setKey(util.utf8Encode(params.key))
  kv.setValue(util.utf8Encode(params.value))

  const index = new messages.Index()
  index.setIndex(root.get({
    serverName: serverName,
    database: activeDatabase,
  }).index)

  const req = new messages.SafeSetOptions()
  req.setKv(kv)
  req.setRootindex(index)

  client.safeSet(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'SafeSet error'
      return callback(err)
    }

    const verifyReq = {
      proof: {
        inclusionPath: res.getInclusionpathList(),
        consistencyPath: res.getConsistencypathList(),
        index: res.getIndex(),
        at: res.getAt(),
        leaf: res.getLeaf(),
        root: res.getRoot(),
      },
      item: {
        key: util.utf8Encode(params.key),
        value: util.utf8Encode(params.value),
        index: res.getIndex(),
      },
      oldRoot: root.get({
        server: serverName,
        database: activeDatabase,
      }),
    }

    proofs.verify(verifyReq, (err) => {
      if (err) {
        return callback(err)
      }

      root.set({
        server: serverName,
        database: activeDatabase,
        root: res.getRoot(),
        index: res.getIndex(),
      })

      callback(null, {
        index: res.getIndex(),
      })
    })
  })
}

const safeGet = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(safeGet, params)
  }

  const index = new messages.Index()
  index.setIndex(root.get({
    server: serverName,
    database: activeDatabase,
  }).index)

  const req = new messages.SafeGetOptions()
  req.setKey(util.utf8Encode(params.key))
  req.setRootindex(index)


  client.safeGet(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'SafeGet error'
      return callback(err)
    }

    const proof = res.getProof()
    const item = res.getItem()
    const verifyReq = {
      proof: {
        inclusionPath: proof.getInclusionpathList(),
        consistencyPath: proof.getConsistencypathList(),
        index: proof.getIndex(),
        at: proof.getAt(),
        leaf: proof.getLeaf(),
        root: proof.getRoot(),
      },
      item: {
        key: item.getKey(),
        value: item.getValue(),
        index: item.getIndex(),
      },
      oldRoot: root.get({
        server: serverName,
        database: activeDatabase,
      }),
    }

    proofs.verify(verifyReq, (err) => {
      if (err) {
        return callback(err)
      }

      root.set({
        server: serverName,
        database: activeDatabase,
        root: proof.getRoot(),
        index: proof.getIndex(),
      })

      callback(null, {
        key: util.utf8Decode(item.getKey()),
        value: util.utf8Decode(item.getValue()),
        index: item.getIndex(),
      })
    })
  })
}

const safeSetSV = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(safeSetSV, params)
  }

  const content = new messages.Content()
  content.setTimestamp(params.timestamp)
  content.setPayload(util.utf8Encode(params.payload))

  const skv = new messages.StructuredKeyValue()
  skv.setKey(util.utf8Encode(params.key))
  skv.setValue(content)

  const index = new messages.Index()
  index.setIndex(root.get({
    serverName: serverName,
    database: activeDatabase,
  }).index)

  const req = new messages.SafeSetSVOptions()
  req.setSkv(skv)
  req.setRootindex(index)

  client.safeSetSV(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'SafeSetSV error'
      return callback(err)
    }

    const verifyReq = {
      proof: {
        inclusionPath: res.getInclusionpathList(),
        consistencyPath: res.getConsistencypathList(),
        index: res.getIndex(),
        at: res.getAt(),
        leaf: res.getLeaf(),
        root: res.getRoot(),
      },
      item: {
        key: util.utf8Encode(params.key),
        value: content.serializeBinary(),
        index: res.getIndex(),
      },
      oldRoot: root.get({
        server: serverName,
        database: activeDatabase,
      }),
    }

    proofs.verify(verifyReq, (err) => {
      if (err) {
        return callback(err)
      }

      root.set({
        server: serverName,
        database: activeDatabase,
        root: res.getRoot(),
        index: res.getIndex(),
      })

      callback(null, {
        index: res.getIndex(),
      })
    })
  })
}

const safeGetSV = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(safeGetSV, params)
  }

  const index = new messages.Index()
  index.setIndex(root.get({
    server: serverName,
    database: activeDatabase,
  }).index)

  const req = new messages.SafeGetOptions()
  req.setKey(util.utf8Encode(params.key))
  req.setRootindex(index)


  client.safeGetSV(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'SafeGetSV error'
      return callback(err)
    }

    const proof = res.getProof()
    const item = res.getItem()

    const content = new messages.Content()
    content.setTimestamp(item.getValue().getTimestamp())
    content.setPayload(item.getValue().getPayload())

    const verifyReq = {
      proof: {
        inclusionPath: proof.getInclusionpathList(),
        consistencyPath: proof.getConsistencypathList(),
        index: proof.getIndex(),
        at: proof.getAt(),
        leaf: proof.getLeaf(),
        root: proof.getRoot(),
      },
      item: {
        key: item.getKey(),
        value: content.serializeBinary(),
        index: item.getIndex(),
      },
      oldRoot: root.get({
        server: serverName,
        database: activeDatabase,
      }),
    }

    proofs.verify(verifyReq, (err) => {
      if (err) {
        return callback(err)
      }

      root.set({
        server: serverName,
        database: activeDatabase,
        root: proof.getRoot(),
        index: proof.getIndex(),
      })

      callback(null, {
        key: util.utf8Decode(item.getKey()),
        timestamp: item.getValue().getTimestamp(),
        payload: util.utf8Decode(
          item.getValue().getPayload()),
        index: item.getIndex(),
      })
    })
  })
}

const updateAuthConfig = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(updateAuthConfig, params)
  }

  const req = new messages.AuthConfig()
  req.setKind(params.auth)
  client.updateAuthConfig(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Update auth config error'
      return callback(err)
    }
    callback()
  })
}

const updateMTLSConfig = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(updateMTLSConfig, params)
  }

  const req = new messages.MTLSConfig()
  req.setEnabled(params.enabled)
  client.updateMTLSConfig(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'Update mtls config error'
      return callback(err)
    }
    callback()
  })
}

const safeZAdd = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(safeZAdd, params)
  }

  const options = new messages.ZAddOptions()
  options.setSet(util.utf8Encode(params.set))
  options.setScore(params.score)
  options.setKey(util.utf8Encode(params.key))

  const index = new messages.Index()
  index.setIndex(root.get({
    serverName: serverName,
    database: activeDatabase,
  }).index)

  const req = new messages.SafeZAddOptions()
  req.setZopts(options)
  req.setRootindex(index)

  client.safeZAdd(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'safeZAdd error'
      return callback(err)
    }

    let key2 = proofs.setKey({
      key: util.utf8Encode(params.key),
      set: util.utf8Encode(params.set),
      score: params.score
    })

    const verifyReq = {
      proof: {
        inclusionPath: res.getInclusionpathList(),
        consistencyPath: res.getConsistencypathList(),
        index: res.getIndex(),
        at: res.getAt(),
        leaf: res.getLeaf(),
        root: res.getRoot(),
      },
      item: {
        key: key2,
        value: util.utf8Encode(params.key),
        index: res.getIndex(),
      },
      oldRoot: root.get({
        server: serverName,
        database: activeDatabase,
      }),
    }

    proofs.verify(verifyReq, (err) => {
      if (err) {
        return callback(err)
      }

      root.set({
        server: serverName,
        database: activeDatabase,
        root: res.getRoot(),
        index: res.getIndex(),
      })

      callback(null, {
        index: res.getIndex(),
      })
    })
  })
}

const inclusion = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(inclusion, params)
  }

  const req = new messages.Index()
  req.setIndex(params.index)

  client.inclusion(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'inclusion error'
      return callback(err)
    }

    callback(null, {
      at: res.getAt(),
      index: res.getIndex(),
      root: res.getRoot(),
      leaf: res.getLeaf(),
      inclusionPath: res.getPathList(),
    })
  })
}

const consistency = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(consistency, params)
  }

  const req = new messages.Index()
  req.setIndex(params.index)

  client.consistency(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'consistency error'
      return callback(err)
    }

    callback(null, {
      oldRootIndex: res.getFirst(),
      at: res.getSecond(),
      oldRoot: res.getFirstroot(),
      newRoot: res.getSecondroot(),
      consistencyPath: res.getPathList(),
    })
  })
}

const bySafeIndex = (params, callback) => {
  if (!callback) {
    return util.asyncifyMethod(bySafeIndex, params)
  }

  const index = new messages.Index()
  index.setIndex(root.get({
    serverName: serverName,
    database: activeDatabase,
  }).index)

  const req = new messages.SafeIndexOptions()
  req.setIndex(params.index)
  req.setRootindex(index)

  client.bySafeIndex(req, metadata, (err, res) => {
    if (err) {
      err.clientErr = 'bySafeIndex error'
      return callback(err)
    }

    const proof = res.getProof()
    const item = res.getItem()
    const verifyReq = {
      proof: {
        inclusionPath: proof.getInclusionpathList(),
        consistencyPath: proof.getConsistencypathList(),
        index: proof.getIndex(),
        at: proof.getAt(),
        leaf: proof.getLeaf(),
        root: proof.getRoot(),
      },
      item: {
        key: item.getKey(),
        value: item.getValue(),
        index: item.getIndex(),
      },
      oldRoot: root.get({
        server: serverName,
        database: activeDatabase,
      }),
    }

    proofs.verify(verifyReq, (err) => {
      if (err) {
        return callback(err)
      }

      root.set({
        server: serverName,
        database: activeDatabase,
        root: proof.getRoot(),
        index: proof.getIndex(),
      })

      callback(null, {
        key: util.utf8Decode(item.getKey()),
        value: util.utf8Decode(item.getValue()),
        index: item.getIndex(),
      })
    })
  })
}

module.exports = ImmudbClient 