// source: schema.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
goog.exportSymbol('proto.immudb.schema.AuthConfig', null, global);
goog.exportSymbol('proto.immudb.schema.ChangePasswordRequest', null, global);
goog.exportSymbol('proto.immudb.schema.ChangePermissionRequest', null, global);
goog.exportSymbol('proto.immudb.schema.Chunk', null, global);
goog.exportSymbol('proto.immudb.schema.Column', null, global);
goog.exportSymbol('proto.immudb.schema.CreateUserRequest', null, global);
goog.exportSymbol('proto.immudb.schema.Database', null, global);
goog.exportSymbol('proto.immudb.schema.DatabaseListResponse', null, global);
goog.exportSymbol('proto.immudb.schema.DualProof', null, global);
goog.exportSymbol('proto.immudb.schema.Entries', null, global);
goog.exportSymbol('proto.immudb.schema.Entry', null, global);
goog.exportSymbol('proto.immudb.schema.EntryCount', null, global);
goog.exportSymbol('proto.immudb.schema.ExecAllRequest', null, global);
goog.exportSymbol('proto.immudb.schema.HealthResponse', null, global);
goog.exportSymbol('proto.immudb.schema.HistoryRequest', null, global);
goog.exportSymbol('proto.immudb.schema.ImmutableState', null, global);
goog.exportSymbol('proto.immudb.schema.InclusionProof', null, global);
goog.exportSymbol('proto.immudb.schema.Key', null, global);
goog.exportSymbol('proto.immudb.schema.KeyListRequest', null, global);
goog.exportSymbol('proto.immudb.schema.KeyPrefix', null, global);
goog.exportSymbol('proto.immudb.schema.KeyRequest', null, global);
goog.exportSymbol('proto.immudb.schema.KeyValue', null, global);
goog.exportSymbol('proto.immudb.schema.LinearProof', null, global);
goog.exportSymbol('proto.immudb.schema.LoginRequest', null, global);
goog.exportSymbol('proto.immudb.schema.LoginResponse', null, global);
goog.exportSymbol('proto.immudb.schema.MTLSConfig', null, global);
goog.exportSymbol('proto.immudb.schema.NamedParam', null, global);
goog.exportSymbol('proto.immudb.schema.Op', null, global);
goog.exportSymbol('proto.immudb.schema.Op.OperationCase', null, global);
goog.exportSymbol('proto.immudb.schema.Permission', null, global);
goog.exportSymbol('proto.immudb.schema.PermissionAction', null, global);
goog.exportSymbol('proto.immudb.schema.Reference', null, global);
goog.exportSymbol('proto.immudb.schema.ReferenceRequest', null, global);
goog.exportSymbol('proto.immudb.schema.Row', null, global);
goog.exportSymbol('proto.immudb.schema.SQLEntry', null, global);
goog.exportSymbol('proto.immudb.schema.SQLExecRequest', null, global);
goog.exportSymbol('proto.immudb.schema.SQLExecResult', null, global);
goog.exportSymbol('proto.immudb.schema.SQLGetRequest', null, global);
goog.exportSymbol('proto.immudb.schema.SQLQueryRequest', null, global);
goog.exportSymbol('proto.immudb.schema.SQLQueryResult', null, global);
goog.exportSymbol('proto.immudb.schema.SQLValue', null, global);
goog.exportSymbol('proto.immudb.schema.SQLValue.ValueCase', null, global);
goog.exportSymbol('proto.immudb.schema.ScanRequest', null, global);
goog.exportSymbol('proto.immudb.schema.Score', null, global);
goog.exportSymbol('proto.immudb.schema.SetActiveUserRequest', null, global);
goog.exportSymbol('proto.immudb.schema.SetRequest', null, global);
goog.exportSymbol('proto.immudb.schema.Signature', null, global);
goog.exportSymbol('proto.immudb.schema.Table', null, global);
goog.exportSymbol('proto.immudb.schema.Tx', null, global);
goog.exportSymbol('proto.immudb.schema.TxEntry', null, global);
goog.exportSymbol('proto.immudb.schema.TxList', null, global);
goog.exportSymbol('proto.immudb.schema.TxMetadata', null, global);
goog.exportSymbol('proto.immudb.schema.TxRequest', null, global);
goog.exportSymbol('proto.immudb.schema.TxScanRequest', null, global);
goog.exportSymbol('proto.immudb.schema.UseDatabaseReply', null, global);
goog.exportSymbol('proto.immudb.schema.UseSnapshotRequest', null, global);
goog.exportSymbol('proto.immudb.schema.User', null, global);
goog.exportSymbol('proto.immudb.schema.UserList', null, global);
goog.exportSymbol('proto.immudb.schema.UserRequest', null, global);
goog.exportSymbol('proto.immudb.schema.VerifiableEntry', null, global);
goog.exportSymbol('proto.immudb.schema.VerifiableGetRequest', null, global);
goog.exportSymbol('proto.immudb.schema.VerifiableReferenceRequest', null, global);
goog.exportSymbol('proto.immudb.schema.VerifiableSQLEntry', null, global);
goog.exportSymbol('proto.immudb.schema.VerifiableSQLGetRequest', null, global);
goog.exportSymbol('proto.immudb.schema.VerifiableSetRequest', null, global);
goog.exportSymbol('proto.immudb.schema.VerifiableTx', null, global);
goog.exportSymbol('proto.immudb.schema.VerifiableTxRequest', null, global);
goog.exportSymbol('proto.immudb.schema.VerifiableZAddRequest', null, global);
goog.exportSymbol('proto.immudb.schema.ZAddRequest', null, global);
goog.exportSymbol('proto.immudb.schema.ZEntries', null, global);
goog.exportSymbol('proto.immudb.schema.ZEntry', null, global);
goog.exportSymbol('proto.immudb.schema.ZScanRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.Key = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.Key, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.Key.displayName = 'proto.immudb.schema.Key';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.Permission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.Permission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.Permission.displayName = 'proto.immudb.schema.Permission';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.immudb.schema.User.repeatedFields_, null);
};
goog.inherits(proto.immudb.schema.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.User.displayName = 'proto.immudb.schema.User';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.UserList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.immudb.schema.UserList.repeatedFields_, null);
};
goog.inherits(proto.immudb.schema.UserList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.UserList.displayName = 'proto.immudb.schema.UserList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.CreateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.CreateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.CreateUserRequest.displayName = 'proto.immudb.schema.CreateUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.UserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.UserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.UserRequest.displayName = 'proto.immudb.schema.UserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.ChangePasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.ChangePasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.ChangePasswordRequest.displayName = 'proto.immudb.schema.ChangePasswordRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.LoginRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.LoginRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.LoginRequest.displayName = 'proto.immudb.schema.LoginRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.LoginResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.LoginResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.LoginResponse.displayName = 'proto.immudb.schema.LoginResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.AuthConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.AuthConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.AuthConfig.displayName = 'proto.immudb.schema.AuthConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.MTLSConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.MTLSConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.MTLSConfig.displayName = 'proto.immudb.schema.MTLSConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.KeyValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.KeyValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.KeyValue.displayName = 'proto.immudb.schema.KeyValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.Entry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.Entry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.Entry.displayName = 'proto.immudb.schema.Entry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.Reference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.Reference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.Reference.displayName = 'proto.immudb.schema.Reference';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.Op = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.immudb.schema.Op.oneofGroups_);
};
goog.inherits(proto.immudb.schema.Op, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.Op.displayName = 'proto.immudb.schema.Op';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.ExecAllRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.immudb.schema.ExecAllRequest.repeatedFields_, null);
};
goog.inherits(proto.immudb.schema.ExecAllRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.ExecAllRequest.displayName = 'proto.immudb.schema.ExecAllRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.Entries = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.immudb.schema.Entries.repeatedFields_, null);
};
goog.inherits(proto.immudb.schema.Entries, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.Entries.displayName = 'proto.immudb.schema.Entries';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.ZEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.ZEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.ZEntry.displayName = 'proto.immudb.schema.ZEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.ZEntries = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.immudb.schema.ZEntries.repeatedFields_, null);
};
goog.inherits(proto.immudb.schema.ZEntries, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.ZEntries.displayName = 'proto.immudb.schema.ZEntries';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.ScanRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.ScanRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.ScanRequest.displayName = 'proto.immudb.schema.ScanRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.KeyPrefix = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.KeyPrefix, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.KeyPrefix.displayName = 'proto.immudb.schema.KeyPrefix';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.EntryCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.EntryCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.EntryCount.displayName = 'proto.immudb.schema.EntryCount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.Signature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.Signature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.Signature.displayName = 'proto.immudb.schema.Signature';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.TxMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.TxMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.TxMetadata.displayName = 'proto.immudb.schema.TxMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.LinearProof = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.immudb.schema.LinearProof.repeatedFields_, null);
};
goog.inherits(proto.immudb.schema.LinearProof, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.LinearProof.displayName = 'proto.immudb.schema.LinearProof';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.DualProof = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.immudb.schema.DualProof.repeatedFields_, null);
};
goog.inherits(proto.immudb.schema.DualProof, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.DualProof.displayName = 'proto.immudb.schema.DualProof';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.Tx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.immudb.schema.Tx.repeatedFields_, null);
};
goog.inherits(proto.immudb.schema.Tx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.Tx.displayName = 'proto.immudb.schema.Tx';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.TxEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.TxEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.TxEntry.displayName = 'proto.immudb.schema.TxEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.VerifiableTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.VerifiableTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.VerifiableTx.displayName = 'proto.immudb.schema.VerifiableTx';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.VerifiableEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.VerifiableEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.VerifiableEntry.displayName = 'proto.immudb.schema.VerifiableEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.InclusionProof = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.immudb.schema.InclusionProof.repeatedFields_, null);
};
goog.inherits(proto.immudb.schema.InclusionProof, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.InclusionProof.displayName = 'proto.immudb.schema.InclusionProof';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.SetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.immudb.schema.SetRequest.repeatedFields_, null);
};
goog.inherits(proto.immudb.schema.SetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.SetRequest.displayName = 'proto.immudb.schema.SetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.KeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.KeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.KeyRequest.displayName = 'proto.immudb.schema.KeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.KeyListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.immudb.schema.KeyListRequest.repeatedFields_, null);
};
goog.inherits(proto.immudb.schema.KeyListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.KeyListRequest.displayName = 'proto.immudb.schema.KeyListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.VerifiableSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.VerifiableSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.VerifiableSetRequest.displayName = 'proto.immudb.schema.VerifiableSetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.VerifiableGetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.VerifiableGetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.VerifiableGetRequest.displayName = 'proto.immudb.schema.VerifiableGetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.HealthResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.HealthResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.HealthResponse.displayName = 'proto.immudb.schema.HealthResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.ImmutableState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.ImmutableState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.ImmutableState.displayName = 'proto.immudb.schema.ImmutableState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.ReferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.ReferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.ReferenceRequest.displayName = 'proto.immudb.schema.ReferenceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.VerifiableReferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.VerifiableReferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.VerifiableReferenceRequest.displayName = 'proto.immudb.schema.VerifiableReferenceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.ZAddRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.ZAddRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.ZAddRequest.displayName = 'proto.immudb.schema.ZAddRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.Score = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.Score, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.Score.displayName = 'proto.immudb.schema.Score';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.ZScanRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.ZScanRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.ZScanRequest.displayName = 'proto.immudb.schema.ZScanRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.HistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.HistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.HistoryRequest.displayName = 'proto.immudb.schema.HistoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.VerifiableZAddRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.VerifiableZAddRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.VerifiableZAddRequest.displayName = 'proto.immudb.schema.VerifiableZAddRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.TxRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.TxRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.TxRequest.displayName = 'proto.immudb.schema.TxRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.VerifiableTxRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.VerifiableTxRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.VerifiableTxRequest.displayName = 'proto.immudb.schema.VerifiableTxRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.TxScanRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.TxScanRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.TxScanRequest.displayName = 'proto.immudb.schema.TxScanRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.TxList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.immudb.schema.TxList.repeatedFields_, null);
};
goog.inherits(proto.immudb.schema.TxList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.TxList.displayName = 'proto.immudb.schema.TxList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.Database = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.Database, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.Database.displayName = 'proto.immudb.schema.Database';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.Table = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.Table, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.Table.displayName = 'proto.immudb.schema.Table';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.SQLGetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.SQLGetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.SQLGetRequest.displayName = 'proto.immudb.schema.SQLGetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.VerifiableSQLGetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.VerifiableSQLGetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.VerifiableSQLGetRequest.displayName = 'proto.immudb.schema.VerifiableSQLGetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.SQLEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.SQLEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.SQLEntry.displayName = 'proto.immudb.schema.SQLEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.VerifiableSQLEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.VerifiableSQLEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.VerifiableSQLEntry.displayName = 'proto.immudb.schema.VerifiableSQLEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.UseDatabaseReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.UseDatabaseReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.UseDatabaseReply.displayName = 'proto.immudb.schema.UseDatabaseReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.ChangePermissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.ChangePermissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.ChangePermissionRequest.displayName = 'proto.immudb.schema.ChangePermissionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.SetActiveUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.SetActiveUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.SetActiveUserRequest.displayName = 'proto.immudb.schema.SetActiveUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.DatabaseListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.immudb.schema.DatabaseListResponse.repeatedFields_, null);
};
goog.inherits(proto.immudb.schema.DatabaseListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.DatabaseListResponse.displayName = 'proto.immudb.schema.DatabaseListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.Chunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.Chunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.Chunk.displayName = 'proto.immudb.schema.Chunk';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.UseSnapshotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.UseSnapshotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.UseSnapshotRequest.displayName = 'proto.immudb.schema.UseSnapshotRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.SQLExecRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.immudb.schema.SQLExecRequest.repeatedFields_, null);
};
goog.inherits(proto.immudb.schema.SQLExecRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.SQLExecRequest.displayName = 'proto.immudb.schema.SQLExecRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.SQLQueryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.immudb.schema.SQLQueryRequest.repeatedFields_, null);
};
goog.inherits(proto.immudb.schema.SQLQueryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.SQLQueryRequest.displayName = 'proto.immudb.schema.SQLQueryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.NamedParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.NamedParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.NamedParam.displayName = 'proto.immudb.schema.NamedParam';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.SQLExecResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.immudb.schema.SQLExecResult.repeatedFields_, null);
};
goog.inherits(proto.immudb.schema.SQLExecResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.SQLExecResult.displayName = 'proto.immudb.schema.SQLExecResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.SQLQueryResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.immudb.schema.SQLQueryResult.repeatedFields_, null);
};
goog.inherits(proto.immudb.schema.SQLQueryResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.SQLQueryResult.displayName = 'proto.immudb.schema.SQLQueryResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.Column = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.immudb.schema.Column, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.Column.displayName = 'proto.immudb.schema.Column';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.immudb.schema.Row.repeatedFields_, null);
};
goog.inherits(proto.immudb.schema.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.Row.displayName = 'proto.immudb.schema.Row';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.immudb.schema.SQLValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.immudb.schema.SQLValue.oneofGroups_);
};
goog.inherits(proto.immudb.schema.SQLValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.immudb.schema.SQLValue.displayName = 'proto.immudb.schema.SQLValue';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.Key.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.Key.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.Key} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Key.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: msg.getKey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.Key}
 */
proto.immudb.schema.Key.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.Key;
  return proto.immudb.schema.Key.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.Key} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.Key}
 */
proto.immudb.schema.Key.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.Key.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.Key.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.Key} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Key.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.Key.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes key = 1;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.immudb.schema.Key.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.Key.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.Key} returns this
 */
proto.immudb.schema.Key.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.Permission.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.Permission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.Permission} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Permission.toObject = function(includeInstance, msg) {
  var f, obj = {
    database: jspb.Message.getFieldWithDefault(msg, 1, ""),
    permission: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.Permission}
 */
proto.immudb.schema.Permission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.Permission;
  return proto.immudb.schema.Permission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.Permission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.Permission}
 */
proto.immudb.schema.Permission.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPermission(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.Permission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.Permission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.Permission} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Permission.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPermission();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string database = 1;
 * @return {string}
 */
proto.immudb.schema.Permission.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.immudb.schema.Permission} returns this
 */
proto.immudb.schema.Permission.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 permission = 2;
 * @return {number}
 */
proto.immudb.schema.Permission.prototype.getPermission = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.Permission} returns this
 */
proto.immudb.schema.Permission.prototype.setPermission = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.immudb.schema.User.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.User.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: msg.getUser_asB64(),
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.immudb.schema.Permission.toObject, includeInstance),
    createdby: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 5, ""),
    active: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.User}
 */
proto.immudb.schema.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.User;
  return proto.immudb.schema.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.User}
 */
proto.immudb.schema.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setUser(value);
      break;
    case 3:
      var value = new proto.immudb.schema.Permission;
      reader.readMessage(value,proto.immudb.schema.Permission.deserializeBinaryFromReader);
      msg.addPermissions(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedat(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.immudb.schema.Permission.serializeBinaryToWriter
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedat();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getActive();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional bytes user = 1;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.User.prototype.getUser = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes user = 1;
 * This is a type-conversion wrapper around `getUser()`
 * @return {string}
 */
proto.immudb.schema.User.prototype.getUser_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getUser()));
};


/**
 * optional bytes user = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUser()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.User.prototype.getUser_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getUser()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.User} returns this
 */
proto.immudb.schema.User.prototype.setUser = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated Permission permissions = 3;
 * @return {!Array<!proto.immudb.schema.Permission>}
 */
proto.immudb.schema.User.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.immudb.schema.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.immudb.schema.Permission, 3));
};


/**
 * @param {!Array<!proto.immudb.schema.Permission>} value
 * @return {!proto.immudb.schema.User} returns this
*/
proto.immudb.schema.User.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.immudb.schema.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.Permission}
 */
proto.immudb.schema.User.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.immudb.schema.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.User} returns this
 */
proto.immudb.schema.User.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};


/**
 * optional string createdby = 4;
 * @return {string}
 */
proto.immudb.schema.User.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.immudb.schema.User} returns this
 */
proto.immudb.schema.User.prototype.setCreatedby = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string createdat = 5;
 * @return {string}
 */
proto.immudb.schema.User.prototype.getCreatedat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.immudb.schema.User} returns this
 */
proto.immudb.schema.User.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool active = 6;
 * @return {boolean}
 */
proto.immudb.schema.User.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.immudb.schema.User} returns this
 */
proto.immudb.schema.User.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.immudb.schema.UserList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.UserList.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.UserList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.UserList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.UserList.toObject = function(includeInstance, msg) {
  var f, obj = {
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.immudb.schema.User.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.UserList}
 */
proto.immudb.schema.UserList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.UserList;
  return proto.immudb.schema.UserList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.UserList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.UserList}
 */
proto.immudb.schema.UserList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.immudb.schema.User;
      reader.readMessage(value,proto.immudb.schema.User.deserializeBinaryFromReader);
      msg.addUsers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.UserList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.UserList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.UserList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.UserList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.immudb.schema.User.serializeBinaryToWriter
    );
  }
};


/**
 * repeated User users = 1;
 * @return {!Array<!proto.immudb.schema.User>}
 */
proto.immudb.schema.UserList.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.immudb.schema.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.immudb.schema.User, 1));
};


/**
 * @param {!Array<!proto.immudb.schema.User>} value
 * @return {!proto.immudb.schema.UserList} returns this
*/
proto.immudb.schema.UserList.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.immudb.schema.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.User}
 */
proto.immudb.schema.UserList.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.immudb.schema.User, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.UserList} returns this
 */
proto.immudb.schema.UserList.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.CreateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.CreateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.CreateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.CreateUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: msg.getUser_asB64(),
    password: msg.getPassword_asB64(),
    permission: jspb.Message.getFieldWithDefault(msg, 3, 0),
    database: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.CreateUserRequest}
 */
proto.immudb.schema.CreateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.CreateUserRequest;
  return proto.immudb.schema.CreateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.CreateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.CreateUserRequest}
 */
proto.immudb.schema.CreateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setUser(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPassword(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPermission(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.CreateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.CreateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.CreateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.CreateUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getPassword_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getPermission();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional bytes user = 1;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.CreateUserRequest.prototype.getUser = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes user = 1;
 * This is a type-conversion wrapper around `getUser()`
 * @return {string}
 */
proto.immudb.schema.CreateUserRequest.prototype.getUser_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getUser()));
};


/**
 * optional bytes user = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUser()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.CreateUserRequest.prototype.getUser_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getUser()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.CreateUserRequest} returns this
 */
proto.immudb.schema.CreateUserRequest.prototype.setUser = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes password = 2;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.CreateUserRequest.prototype.getPassword = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes password = 2;
 * This is a type-conversion wrapper around `getPassword()`
 * @return {string}
 */
proto.immudb.schema.CreateUserRequest.prototype.getPassword_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPassword()));
};


/**
 * optional bytes password = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPassword()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.CreateUserRequest.prototype.getPassword_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPassword()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.CreateUserRequest} returns this
 */
proto.immudb.schema.CreateUserRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint32 permission = 3;
 * @return {number}
 */
proto.immudb.schema.CreateUserRequest.prototype.getPermission = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.CreateUserRequest} returns this
 */
proto.immudb.schema.CreateUserRequest.prototype.setPermission = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string database = 4;
 * @return {string}
 */
proto.immudb.schema.CreateUserRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.immudb.schema.CreateUserRequest} returns this
 */
proto.immudb.schema.CreateUserRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.UserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.UserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.UserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.UserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: msg.getUser_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.UserRequest}
 */
proto.immudb.schema.UserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.UserRequest;
  return proto.immudb.schema.UserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.UserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.UserRequest}
 */
proto.immudb.schema.UserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.UserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.UserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.UserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.UserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes user = 1;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.UserRequest.prototype.getUser = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes user = 1;
 * This is a type-conversion wrapper around `getUser()`
 * @return {string}
 */
proto.immudb.schema.UserRequest.prototype.getUser_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getUser()));
};


/**
 * optional bytes user = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUser()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.UserRequest.prototype.getUser_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getUser()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.UserRequest} returns this
 */
proto.immudb.schema.UserRequest.prototype.setUser = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.ChangePasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.ChangePasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.ChangePasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.ChangePasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: msg.getUser_asB64(),
    oldpassword: msg.getOldpassword_asB64(),
    newpassword: msg.getNewpassword_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.ChangePasswordRequest}
 */
proto.immudb.schema.ChangePasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.ChangePasswordRequest;
  return proto.immudb.schema.ChangePasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.ChangePasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.ChangePasswordRequest}
 */
proto.immudb.schema.ChangePasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setUser(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOldpassword(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNewpassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.ChangePasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.ChangePasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.ChangePasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.ChangePasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getOldpassword_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getNewpassword_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes user = 1;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.ChangePasswordRequest.prototype.getUser = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes user = 1;
 * This is a type-conversion wrapper around `getUser()`
 * @return {string}
 */
proto.immudb.schema.ChangePasswordRequest.prototype.getUser_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getUser()));
};


/**
 * optional bytes user = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUser()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.ChangePasswordRequest.prototype.getUser_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getUser()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.ChangePasswordRequest} returns this
 */
proto.immudb.schema.ChangePasswordRequest.prototype.setUser = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes oldPassword = 2;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.ChangePasswordRequest.prototype.getOldpassword = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes oldPassword = 2;
 * This is a type-conversion wrapper around `getOldpassword()`
 * @return {string}
 */
proto.immudb.schema.ChangePasswordRequest.prototype.getOldpassword_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOldpassword()));
};


/**
 * optional bytes oldPassword = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOldpassword()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.ChangePasswordRequest.prototype.getOldpassword_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOldpassword()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.ChangePasswordRequest} returns this
 */
proto.immudb.schema.ChangePasswordRequest.prototype.setOldpassword = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes newPassword = 3;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.ChangePasswordRequest.prototype.getNewpassword = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes newPassword = 3;
 * This is a type-conversion wrapper around `getNewpassword()`
 * @return {string}
 */
proto.immudb.schema.ChangePasswordRequest.prototype.getNewpassword_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNewpassword()));
};


/**
 * optional bytes newPassword = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNewpassword()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.ChangePasswordRequest.prototype.getNewpassword_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNewpassword()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.ChangePasswordRequest} returns this
 */
proto.immudb.schema.ChangePasswordRequest.prototype.setNewpassword = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.LoginRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.LoginRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.LoginRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.LoginRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: msg.getUser_asB64(),
    password: msg.getPassword_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.LoginRequest}
 */
proto.immudb.schema.LoginRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.LoginRequest;
  return proto.immudb.schema.LoginRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.LoginRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.LoginRequest}
 */
proto.immudb.schema.LoginRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setUser(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.LoginRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.LoginRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.LoginRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.LoginRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getPassword_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes user = 1;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.LoginRequest.prototype.getUser = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes user = 1;
 * This is a type-conversion wrapper around `getUser()`
 * @return {string}
 */
proto.immudb.schema.LoginRequest.prototype.getUser_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getUser()));
};


/**
 * optional bytes user = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUser()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.LoginRequest.prototype.getUser_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getUser()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.LoginRequest} returns this
 */
proto.immudb.schema.LoginRequest.prototype.setUser = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes password = 2;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.LoginRequest.prototype.getPassword = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes password = 2;
 * This is a type-conversion wrapper around `getPassword()`
 * @return {string}
 */
proto.immudb.schema.LoginRequest.prototype.getPassword_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPassword()));
};


/**
 * optional bytes password = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPassword()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.LoginRequest.prototype.getPassword_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPassword()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.LoginRequest} returns this
 */
proto.immudb.schema.LoginRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.LoginResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.LoginResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.LoginResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.LoginResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    warning: msg.getWarning_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.LoginResponse}
 */
proto.immudb.schema.LoginResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.LoginResponse;
  return proto.immudb.schema.LoginResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.LoginResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.LoginResponse}
 */
proto.immudb.schema.LoginResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setWarning(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.LoginResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.LoginResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.LoginResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.LoginResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWarning_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.immudb.schema.LoginResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.immudb.schema.LoginResponse} returns this
 */
proto.immudb.schema.LoginResponse.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes warning = 2;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.LoginResponse.prototype.getWarning = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes warning = 2;
 * This is a type-conversion wrapper around `getWarning()`
 * @return {string}
 */
proto.immudb.schema.LoginResponse.prototype.getWarning_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getWarning()));
};


/**
 * optional bytes warning = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getWarning()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.LoginResponse.prototype.getWarning_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getWarning()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.LoginResponse} returns this
 */
proto.immudb.schema.LoginResponse.prototype.setWarning = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.AuthConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.AuthConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.AuthConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.AuthConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.AuthConfig}
 */
proto.immudb.schema.AuthConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.AuthConfig;
  return proto.immudb.schema.AuthConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.AuthConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.AuthConfig}
 */
proto.immudb.schema.AuthConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setKind(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.AuthConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.AuthConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.AuthConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.AuthConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 kind = 1;
 * @return {number}
 */
proto.immudb.schema.AuthConfig.prototype.getKind = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.AuthConfig} returns this
 */
proto.immudb.schema.AuthConfig.prototype.setKind = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.MTLSConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.MTLSConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.MTLSConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.MTLSConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.MTLSConfig}
 */
proto.immudb.schema.MTLSConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.MTLSConfig;
  return proto.immudb.schema.MTLSConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.MTLSConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.MTLSConfig}
 */
proto.immudb.schema.MTLSConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.MTLSConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.MTLSConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.MTLSConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.MTLSConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.immudb.schema.MTLSConfig.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.immudb.schema.MTLSConfig} returns this
 */
proto.immudb.schema.MTLSConfig.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.KeyValue.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.KeyValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.KeyValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.KeyValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: msg.getKey_asB64(),
    value: msg.getValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.KeyValue}
 */
proto.immudb.schema.KeyValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.KeyValue;
  return proto.immudb.schema.KeyValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.KeyValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.KeyValue}
 */
proto.immudb.schema.KeyValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.KeyValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.KeyValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.KeyValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.KeyValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.KeyValue.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes key = 1;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.immudb.schema.KeyValue.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.KeyValue.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.KeyValue} returns this
 */
proto.immudb.schema.KeyValue.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.KeyValue.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.immudb.schema.KeyValue.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.KeyValue.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.KeyValue} returns this
 */
proto.immudb.schema.KeyValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.Entry.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.Entry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.Entry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Entry.toObject = function(includeInstance, msg) {
  var f, obj = {
    tx: jspb.Message.getFieldWithDefault(msg, 1, 0),
    key: msg.getKey_asB64(),
    value: msg.getValue_asB64(),
    referencedby: (f = msg.getReferencedby()) && proto.immudb.schema.Reference.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.Entry}
 */
proto.immudb.schema.Entry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.Entry;
  return proto.immudb.schema.Entry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.Entry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.Entry}
 */
proto.immudb.schema.Entry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTx(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    case 4:
      var value = new proto.immudb.schema.Reference;
      reader.readMessage(value,proto.immudb.schema.Reference.deserializeBinaryFromReader);
      msg.setReferencedby(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.Entry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.Entry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.Entry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Entry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTx();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getReferencedby();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.immudb.schema.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 tx = 1;
 * @return {number}
 */
proto.immudb.schema.Entry.prototype.getTx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.Entry} returns this
 */
proto.immudb.schema.Entry.prototype.setTx = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.Entry.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes key = 2;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.immudb.schema.Entry.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.Entry.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.Entry} returns this
 */
proto.immudb.schema.Entry.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes value = 3;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.Entry.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes value = 3;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.immudb.schema.Entry.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.Entry.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.Entry} returns this
 */
proto.immudb.schema.Entry.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional Reference referencedBy = 4;
 * @return {?proto.immudb.schema.Reference}
 */
proto.immudb.schema.Entry.prototype.getReferencedby = function() {
  return /** @type{?proto.immudb.schema.Reference} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.Reference, 4));
};


/**
 * @param {?proto.immudb.schema.Reference|undefined} value
 * @return {!proto.immudb.schema.Entry} returns this
*/
proto.immudb.schema.Entry.prototype.setReferencedby = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.Entry} returns this
 */
proto.immudb.schema.Entry.prototype.clearReferencedby = function() {
  return this.setReferencedby(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.Entry.prototype.hasReferencedby = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.Reference.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.Reference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.Reference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Reference.toObject = function(includeInstance, msg) {
  var f, obj = {
    tx: jspb.Message.getFieldWithDefault(msg, 1, 0),
    key: msg.getKey_asB64(),
    attx: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.Reference}
 */
proto.immudb.schema.Reference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.Reference;
  return proto.immudb.schema.Reference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.Reference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.Reference}
 */
proto.immudb.schema.Reference.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTx(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAttx(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.Reference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.Reference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.Reference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Reference.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTx();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getAttx();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional uint64 tx = 1;
 * @return {number}
 */
proto.immudb.schema.Reference.prototype.getTx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.Reference} returns this
 */
proto.immudb.schema.Reference.prototype.setTx = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.Reference.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes key = 2;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.immudb.schema.Reference.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.Reference.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.Reference} returns this
 */
proto.immudb.schema.Reference.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint64 atTx = 3;
 * @return {number}
 */
proto.immudb.schema.Reference.prototype.getAttx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.Reference} returns this
 */
proto.immudb.schema.Reference.prototype.setAttx = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.immudb.schema.Op.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.immudb.schema.Op.OperationCase = {
  OPERATION_NOT_SET: 0,
  KV: 1,
  ZADD: 2,
  REF: 3
};

/**
 * @return {proto.immudb.schema.Op.OperationCase}
 */
proto.immudb.schema.Op.prototype.getOperationCase = function() {
  return /** @type {proto.immudb.schema.Op.OperationCase} */(jspb.Message.computeOneofCase(this, proto.immudb.schema.Op.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.Op.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.Op.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.Op} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Op.toObject = function(includeInstance, msg) {
  var f, obj = {
    kv: (f = msg.getKv()) && proto.immudb.schema.KeyValue.toObject(includeInstance, f),
    zadd: (f = msg.getZadd()) && proto.immudb.schema.ZAddRequest.toObject(includeInstance, f),
    ref: (f = msg.getRef()) && proto.immudb.schema.ReferenceRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.Op}
 */
proto.immudb.schema.Op.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.Op;
  return proto.immudb.schema.Op.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.Op} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.Op}
 */
proto.immudb.schema.Op.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.immudb.schema.KeyValue;
      reader.readMessage(value,proto.immudb.schema.KeyValue.deserializeBinaryFromReader);
      msg.setKv(value);
      break;
    case 2:
      var value = new proto.immudb.schema.ZAddRequest;
      reader.readMessage(value,proto.immudb.schema.ZAddRequest.deserializeBinaryFromReader);
      msg.setZadd(value);
      break;
    case 3:
      var value = new proto.immudb.schema.ReferenceRequest;
      reader.readMessage(value,proto.immudb.schema.ReferenceRequest.deserializeBinaryFromReader);
      msg.setRef(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.Op.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.Op.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.Op} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Op.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKv();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.immudb.schema.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getZadd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.immudb.schema.ZAddRequest.serializeBinaryToWriter
    );
  }
  f = message.getRef();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.immudb.schema.ReferenceRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional KeyValue kv = 1;
 * @return {?proto.immudb.schema.KeyValue}
 */
proto.immudb.schema.Op.prototype.getKv = function() {
  return /** @type{?proto.immudb.schema.KeyValue} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.KeyValue, 1));
};


/**
 * @param {?proto.immudb.schema.KeyValue|undefined} value
 * @return {!proto.immudb.schema.Op} returns this
*/
proto.immudb.schema.Op.prototype.setKv = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.immudb.schema.Op.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.Op} returns this
 */
proto.immudb.schema.Op.prototype.clearKv = function() {
  return this.setKv(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.Op.prototype.hasKv = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ZAddRequest zAdd = 2;
 * @return {?proto.immudb.schema.ZAddRequest}
 */
proto.immudb.schema.Op.prototype.getZadd = function() {
  return /** @type{?proto.immudb.schema.ZAddRequest} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.ZAddRequest, 2));
};


/**
 * @param {?proto.immudb.schema.ZAddRequest|undefined} value
 * @return {!proto.immudb.schema.Op} returns this
*/
proto.immudb.schema.Op.prototype.setZadd = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.immudb.schema.Op.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.Op} returns this
 */
proto.immudb.schema.Op.prototype.clearZadd = function() {
  return this.setZadd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.Op.prototype.hasZadd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ReferenceRequest ref = 3;
 * @return {?proto.immudb.schema.ReferenceRequest}
 */
proto.immudb.schema.Op.prototype.getRef = function() {
  return /** @type{?proto.immudb.schema.ReferenceRequest} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.ReferenceRequest, 3));
};


/**
 * @param {?proto.immudb.schema.ReferenceRequest|undefined} value
 * @return {!proto.immudb.schema.Op} returns this
*/
proto.immudb.schema.Op.prototype.setRef = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.immudb.schema.Op.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.Op} returns this
 */
proto.immudb.schema.Op.prototype.clearRef = function() {
  return this.setRef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.Op.prototype.hasRef = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.immudb.schema.ExecAllRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.ExecAllRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.ExecAllRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.ExecAllRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.ExecAllRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationsList: jspb.Message.toObjectList(msg.getOperationsList(),
    proto.immudb.schema.Op.toObject, includeInstance),
    nowait: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.ExecAllRequest}
 */
proto.immudb.schema.ExecAllRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.ExecAllRequest;
  return proto.immudb.schema.ExecAllRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.ExecAllRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.ExecAllRequest}
 */
proto.immudb.schema.ExecAllRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.immudb.schema.Op;
      reader.readMessage(value,proto.immudb.schema.Op.deserializeBinaryFromReader);
      msg.addOperations(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNowait(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.ExecAllRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.ExecAllRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.ExecAllRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.ExecAllRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.immudb.schema.Op.serializeBinaryToWriter
    );
  }
  f = message.getNowait();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * repeated Op Operations = 1;
 * @return {!Array<!proto.immudb.schema.Op>}
 */
proto.immudb.schema.ExecAllRequest.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.immudb.schema.Op>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.immudb.schema.Op, 1));
};


/**
 * @param {!Array<!proto.immudb.schema.Op>} value
 * @return {!proto.immudb.schema.ExecAllRequest} returns this
*/
proto.immudb.schema.ExecAllRequest.prototype.setOperationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.immudb.schema.Op=} opt_value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.Op}
 */
proto.immudb.schema.ExecAllRequest.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.immudb.schema.Op, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.ExecAllRequest} returns this
 */
proto.immudb.schema.ExecAllRequest.prototype.clearOperationsList = function() {
  return this.setOperationsList([]);
};


/**
 * optional bool noWait = 2;
 * @return {boolean}
 */
proto.immudb.schema.ExecAllRequest.prototype.getNowait = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.immudb.schema.ExecAllRequest} returns this
 */
proto.immudb.schema.ExecAllRequest.prototype.setNowait = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.immudb.schema.Entries.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.Entries.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.Entries.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.Entries} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Entries.toObject = function(includeInstance, msg) {
  var f, obj = {
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.immudb.schema.Entry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.Entries}
 */
proto.immudb.schema.Entries.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.Entries;
  return proto.immudb.schema.Entries.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.Entries} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.Entries}
 */
proto.immudb.schema.Entries.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.immudb.schema.Entry;
      reader.readMessage(value,proto.immudb.schema.Entry.deserializeBinaryFromReader);
      msg.addEntries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.Entries.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.Entries.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.Entries} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Entries.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.immudb.schema.Entry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Entry entries = 1;
 * @return {!Array<!proto.immudb.schema.Entry>}
 */
proto.immudb.schema.Entries.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.immudb.schema.Entry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.immudb.schema.Entry, 1));
};


/**
 * @param {!Array<!proto.immudb.schema.Entry>} value
 * @return {!proto.immudb.schema.Entries} returns this
*/
proto.immudb.schema.Entries.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.immudb.schema.Entry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.Entry}
 */
proto.immudb.schema.Entries.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.immudb.schema.Entry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.Entries} returns this
 */
proto.immudb.schema.Entries.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.ZEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.ZEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.ZEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.ZEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    set: msg.getSet_asB64(),
    key: msg.getKey_asB64(),
    entry: (f = msg.getEntry()) && proto.immudb.schema.Entry.toObject(includeInstance, f),
    score: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    attx: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.ZEntry}
 */
proto.immudb.schema.ZEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.ZEntry;
  return proto.immudb.schema.ZEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.ZEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.ZEntry}
 */
proto.immudb.schema.ZEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSet(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 3:
      var value = new proto.immudb.schema.Entry;
      reader.readMessage(value,proto.immudb.schema.Entry.deserializeBinaryFromReader);
      msg.setEntry(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setScore(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAttx(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.ZEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.ZEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.ZEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.ZEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSet_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getEntry();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.immudb.schema.Entry.serializeBinaryToWriter
    );
  }
  f = message.getScore();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getAttx();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional bytes set = 1;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.ZEntry.prototype.getSet = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes set = 1;
 * This is a type-conversion wrapper around `getSet()`
 * @return {string}
 */
proto.immudb.schema.ZEntry.prototype.getSet_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSet()));
};


/**
 * optional bytes set = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSet()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.ZEntry.prototype.getSet_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSet()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.ZEntry} returns this
 */
proto.immudb.schema.ZEntry.prototype.setSet = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.ZEntry.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes key = 2;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.immudb.schema.ZEntry.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.ZEntry.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.ZEntry} returns this
 */
proto.immudb.schema.ZEntry.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional Entry entry = 3;
 * @return {?proto.immudb.schema.Entry}
 */
proto.immudb.schema.ZEntry.prototype.getEntry = function() {
  return /** @type{?proto.immudb.schema.Entry} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.Entry, 3));
};


/**
 * @param {?proto.immudb.schema.Entry|undefined} value
 * @return {!proto.immudb.schema.ZEntry} returns this
*/
proto.immudb.schema.ZEntry.prototype.setEntry = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.ZEntry} returns this
 */
proto.immudb.schema.ZEntry.prototype.clearEntry = function() {
  return this.setEntry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.ZEntry.prototype.hasEntry = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double score = 4;
 * @return {number}
 */
proto.immudb.schema.ZEntry.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.ZEntry} returns this
 */
proto.immudb.schema.ZEntry.prototype.setScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional uint64 atTx = 5;
 * @return {number}
 */
proto.immudb.schema.ZEntry.prototype.getAttx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.ZEntry} returns this
 */
proto.immudb.schema.ZEntry.prototype.setAttx = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.immudb.schema.ZEntries.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.ZEntries.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.ZEntries.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.ZEntries} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.ZEntries.toObject = function(includeInstance, msg) {
  var f, obj = {
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.immudb.schema.ZEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.ZEntries}
 */
proto.immudb.schema.ZEntries.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.ZEntries;
  return proto.immudb.schema.ZEntries.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.ZEntries} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.ZEntries}
 */
proto.immudb.schema.ZEntries.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.immudb.schema.ZEntry;
      reader.readMessage(value,proto.immudb.schema.ZEntry.deserializeBinaryFromReader);
      msg.addEntries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.ZEntries.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.ZEntries.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.ZEntries} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.ZEntries.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.immudb.schema.ZEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ZEntry entries = 1;
 * @return {!Array<!proto.immudb.schema.ZEntry>}
 */
proto.immudb.schema.ZEntries.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.immudb.schema.ZEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.immudb.schema.ZEntry, 1));
};


/**
 * @param {!Array<!proto.immudb.schema.ZEntry>} value
 * @return {!proto.immudb.schema.ZEntries} returns this
*/
proto.immudb.schema.ZEntries.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.immudb.schema.ZEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.ZEntry}
 */
proto.immudb.schema.ZEntries.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.immudb.schema.ZEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.ZEntries} returns this
 */
proto.immudb.schema.ZEntries.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.ScanRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.ScanRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.ScanRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.ScanRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    seekkey: msg.getSeekkey_asB64(),
    prefix: msg.getPrefix_asB64(),
    desc: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    sincetx: jspb.Message.getFieldWithDefault(msg, 5, 0),
    nowait: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.ScanRequest}
 */
proto.immudb.schema.ScanRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.ScanRequest;
  return proto.immudb.schema.ScanRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.ScanRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.ScanRequest}
 */
proto.immudb.schema.ScanRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSeekkey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPrefix(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDesc(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSincetx(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNowait(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.ScanRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.ScanRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.ScanRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.ScanRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeekkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getPrefix_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getDesc();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getSincetx();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getNowait();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional bytes seekKey = 1;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.ScanRequest.prototype.getSeekkey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes seekKey = 1;
 * This is a type-conversion wrapper around `getSeekkey()`
 * @return {string}
 */
proto.immudb.schema.ScanRequest.prototype.getSeekkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSeekkey()));
};


/**
 * optional bytes seekKey = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSeekkey()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.ScanRequest.prototype.getSeekkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSeekkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.ScanRequest} returns this
 */
proto.immudb.schema.ScanRequest.prototype.setSeekkey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes prefix = 2;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.ScanRequest.prototype.getPrefix = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes prefix = 2;
 * This is a type-conversion wrapper around `getPrefix()`
 * @return {string}
 */
proto.immudb.schema.ScanRequest.prototype.getPrefix_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPrefix()));
};


/**
 * optional bytes prefix = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPrefix()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.ScanRequest.prototype.getPrefix_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPrefix()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.ScanRequest} returns this
 */
proto.immudb.schema.ScanRequest.prototype.setPrefix = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bool desc = 3;
 * @return {boolean}
 */
proto.immudb.schema.ScanRequest.prototype.getDesc = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.immudb.schema.ScanRequest} returns this
 */
proto.immudb.schema.ScanRequest.prototype.setDesc = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional uint64 limit = 4;
 * @return {number}
 */
proto.immudb.schema.ScanRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.ScanRequest} returns this
 */
proto.immudb.schema.ScanRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 sinceTx = 5;
 * @return {number}
 */
proto.immudb.schema.ScanRequest.prototype.getSincetx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.ScanRequest} returns this
 */
proto.immudb.schema.ScanRequest.prototype.setSincetx = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool noWait = 6;
 * @return {boolean}
 */
proto.immudb.schema.ScanRequest.prototype.getNowait = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.immudb.schema.ScanRequest} returns this
 */
proto.immudb.schema.ScanRequest.prototype.setNowait = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.KeyPrefix.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.KeyPrefix.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.KeyPrefix} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.KeyPrefix.toObject = function(includeInstance, msg) {
  var f, obj = {
    prefix: msg.getPrefix_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.KeyPrefix}
 */
proto.immudb.schema.KeyPrefix.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.KeyPrefix;
  return proto.immudb.schema.KeyPrefix.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.KeyPrefix} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.KeyPrefix}
 */
proto.immudb.schema.KeyPrefix.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPrefix(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.KeyPrefix.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.KeyPrefix.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.KeyPrefix} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.KeyPrefix.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrefix_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes prefix = 1;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.KeyPrefix.prototype.getPrefix = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes prefix = 1;
 * This is a type-conversion wrapper around `getPrefix()`
 * @return {string}
 */
proto.immudb.schema.KeyPrefix.prototype.getPrefix_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPrefix()));
};


/**
 * optional bytes prefix = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPrefix()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.KeyPrefix.prototype.getPrefix_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPrefix()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.KeyPrefix} returns this
 */
proto.immudb.schema.KeyPrefix.prototype.setPrefix = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.EntryCount.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.EntryCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.EntryCount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.EntryCount.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.EntryCount}
 */
proto.immudb.schema.EntryCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.EntryCount;
  return proto.immudb.schema.EntryCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.EntryCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.EntryCount}
 */
proto.immudb.schema.EntryCount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.EntryCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.EntryCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.EntryCount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.EntryCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 count = 1;
 * @return {number}
 */
proto.immudb.schema.EntryCount.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.EntryCount} returns this
 */
proto.immudb.schema.EntryCount.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.Signature.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.Signature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.Signature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Signature.toObject = function(includeInstance, msg) {
  var f, obj = {
    publickey: msg.getPublickey_asB64(),
    signature: msg.getSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.Signature}
 */
proto.immudb.schema.Signature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.Signature;
  return proto.immudb.schema.Signature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.Signature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.Signature}
 */
proto.immudb.schema.Signature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublickey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.Signature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.Signature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.Signature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Signature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublickey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes publicKey = 1;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.Signature.prototype.getPublickey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes publicKey = 1;
 * This is a type-conversion wrapper around `getPublickey()`
 * @return {string}
 */
proto.immudb.schema.Signature.prototype.getPublickey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublickey()));
};


/**
 * optional bytes publicKey = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublickey()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.Signature.prototype.getPublickey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublickey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.Signature} returns this
 */
proto.immudb.schema.Signature.prototype.setPublickey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.Signature.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.immudb.schema.Signature.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.Signature.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.Signature} returns this
 */
proto.immudb.schema.Signature.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.TxMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.TxMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.TxMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.TxMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    prevalh: msg.getPrevalh_asB64(),
    ts: jspb.Message.getFieldWithDefault(msg, 3, 0),
    nentries: jspb.Message.getFieldWithDefault(msg, 4, 0),
    eh: msg.getEh_asB64(),
    bltxid: jspb.Message.getFieldWithDefault(msg, 6, 0),
    blroot: msg.getBlroot_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.TxMetadata}
 */
proto.immudb.schema.TxMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.TxMetadata;
  return proto.immudb.schema.TxMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.TxMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.TxMetadata}
 */
proto.immudb.schema.TxMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPrevalh(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTs(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNentries(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEh(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBltxid(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlroot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.TxMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.TxMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.TxMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.TxMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getPrevalh_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getTs();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getNentries();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getEh_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getBltxid();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getBlroot_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.immudb.schema.TxMetadata.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.TxMetadata} returns this
 */
proto.immudb.schema.TxMetadata.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes prevAlh = 2;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.TxMetadata.prototype.getPrevalh = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes prevAlh = 2;
 * This is a type-conversion wrapper around `getPrevalh()`
 * @return {string}
 */
proto.immudb.schema.TxMetadata.prototype.getPrevalh_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPrevalh()));
};


/**
 * optional bytes prevAlh = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPrevalh()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.TxMetadata.prototype.getPrevalh_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPrevalh()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.TxMetadata} returns this
 */
proto.immudb.schema.TxMetadata.prototype.setPrevalh = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional int64 ts = 3;
 * @return {number}
 */
proto.immudb.schema.TxMetadata.prototype.getTs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.TxMetadata} returns this
 */
proto.immudb.schema.TxMetadata.prototype.setTs = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 nentries = 4;
 * @return {number}
 */
proto.immudb.schema.TxMetadata.prototype.getNentries = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.TxMetadata} returns this
 */
proto.immudb.schema.TxMetadata.prototype.setNentries = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bytes eH = 5;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.TxMetadata.prototype.getEh = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes eH = 5;
 * This is a type-conversion wrapper around `getEh()`
 * @return {string}
 */
proto.immudb.schema.TxMetadata.prototype.getEh_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEh()));
};


/**
 * optional bytes eH = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEh()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.TxMetadata.prototype.getEh_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEh()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.TxMetadata} returns this
 */
proto.immudb.schema.TxMetadata.prototype.setEh = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional uint64 blTxId = 6;
 * @return {number}
 */
proto.immudb.schema.TxMetadata.prototype.getBltxid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.TxMetadata} returns this
 */
proto.immudb.schema.TxMetadata.prototype.setBltxid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bytes blRoot = 7;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.TxMetadata.prototype.getBlroot = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes blRoot = 7;
 * This is a type-conversion wrapper around `getBlroot()`
 * @return {string}
 */
proto.immudb.schema.TxMetadata.prototype.getBlroot_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlroot()));
};


/**
 * optional bytes blRoot = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlroot()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.TxMetadata.prototype.getBlroot_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlroot()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.TxMetadata} returns this
 */
proto.immudb.schema.TxMetadata.prototype.setBlroot = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.immudb.schema.LinearProof.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.LinearProof.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.LinearProof.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.LinearProof} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.LinearProof.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourcetxid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    targettxid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    termsList: msg.getTermsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.LinearProof}
 */
proto.immudb.schema.LinearProof.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.LinearProof;
  return proto.immudb.schema.LinearProof.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.LinearProof} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.LinearProof}
 */
proto.immudb.schema.LinearProof.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSourcetxid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTargettxid(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addTerms(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.LinearProof.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.LinearProof.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.LinearProof} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.LinearProof.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourcetxid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getTargettxid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTermsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      3,
      f
    );
  }
};


/**
 * optional uint64 sourceTxId = 1;
 * @return {number}
 */
proto.immudb.schema.LinearProof.prototype.getSourcetxid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.LinearProof} returns this
 */
proto.immudb.schema.LinearProof.prototype.setSourcetxid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 TargetTxId = 2;
 * @return {number}
 */
proto.immudb.schema.LinearProof.prototype.getTargettxid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.LinearProof} returns this
 */
proto.immudb.schema.LinearProof.prototype.setTargettxid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated bytes terms = 3;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.immudb.schema.LinearProof.prototype.getTermsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * repeated bytes terms = 3;
 * This is a type-conversion wrapper around `getTermsList()`
 * @return {!Array<string>}
 */
proto.immudb.schema.LinearProof.prototype.getTermsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getTermsList()));
};


/**
 * repeated bytes terms = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTermsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.immudb.schema.LinearProof.prototype.getTermsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getTermsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.immudb.schema.LinearProof} returns this
 */
proto.immudb.schema.LinearProof.prototype.setTermsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.LinearProof} returns this
 */
proto.immudb.schema.LinearProof.prototype.addTerms = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.LinearProof} returns this
 */
proto.immudb.schema.LinearProof.prototype.clearTermsList = function() {
  return this.setTermsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.immudb.schema.DualProof.repeatedFields_ = [3,4,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.DualProof.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.DualProof.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.DualProof} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.DualProof.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourcetxmetadata: (f = msg.getSourcetxmetadata()) && proto.immudb.schema.TxMetadata.toObject(includeInstance, f),
    targettxmetadata: (f = msg.getTargettxmetadata()) && proto.immudb.schema.TxMetadata.toObject(includeInstance, f),
    inclusionproofList: msg.getInclusionproofList_asB64(),
    consistencyproofList: msg.getConsistencyproofList_asB64(),
    targetbltxalh: msg.getTargetbltxalh_asB64(),
    lastinclusionproofList: msg.getLastinclusionproofList_asB64(),
    linearproof: (f = msg.getLinearproof()) && proto.immudb.schema.LinearProof.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.DualProof}
 */
proto.immudb.schema.DualProof.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.DualProof;
  return proto.immudb.schema.DualProof.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.DualProof} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.DualProof}
 */
proto.immudb.schema.DualProof.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.immudb.schema.TxMetadata;
      reader.readMessage(value,proto.immudb.schema.TxMetadata.deserializeBinaryFromReader);
      msg.setSourcetxmetadata(value);
      break;
    case 2:
      var value = new proto.immudb.schema.TxMetadata;
      reader.readMessage(value,proto.immudb.schema.TxMetadata.deserializeBinaryFromReader);
      msg.setTargettxmetadata(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addInclusionproof(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addConsistencyproof(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTargetbltxalh(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addLastinclusionproof(value);
      break;
    case 7:
      var value = new proto.immudb.schema.LinearProof;
      reader.readMessage(value,proto.immudb.schema.LinearProof.deserializeBinaryFromReader);
      msg.setLinearproof(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.DualProof.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.DualProof.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.DualProof} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.DualProof.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourcetxmetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.immudb.schema.TxMetadata.serializeBinaryToWriter
    );
  }
  f = message.getTargettxmetadata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.immudb.schema.TxMetadata.serializeBinaryToWriter
    );
  }
  f = message.getInclusionproofList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      3,
      f
    );
  }
  f = message.getConsistencyproofList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      4,
      f
    );
  }
  f = message.getTargetbltxalh_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getLastinclusionproofList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      6,
      f
    );
  }
  f = message.getLinearproof();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.immudb.schema.LinearProof.serializeBinaryToWriter
    );
  }
};


/**
 * optional TxMetadata sourceTxMetadata = 1;
 * @return {?proto.immudb.schema.TxMetadata}
 */
proto.immudb.schema.DualProof.prototype.getSourcetxmetadata = function() {
  return /** @type{?proto.immudb.schema.TxMetadata} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.TxMetadata, 1));
};


/**
 * @param {?proto.immudb.schema.TxMetadata|undefined} value
 * @return {!proto.immudb.schema.DualProof} returns this
*/
proto.immudb.schema.DualProof.prototype.setSourcetxmetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.DualProof} returns this
 */
proto.immudb.schema.DualProof.prototype.clearSourcetxmetadata = function() {
  return this.setSourcetxmetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.DualProof.prototype.hasSourcetxmetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TxMetadata targetTxMetadata = 2;
 * @return {?proto.immudb.schema.TxMetadata}
 */
proto.immudb.schema.DualProof.prototype.getTargettxmetadata = function() {
  return /** @type{?proto.immudb.schema.TxMetadata} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.TxMetadata, 2));
};


/**
 * @param {?proto.immudb.schema.TxMetadata|undefined} value
 * @return {!proto.immudb.schema.DualProof} returns this
*/
proto.immudb.schema.DualProof.prototype.setTargettxmetadata = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.DualProof} returns this
 */
proto.immudb.schema.DualProof.prototype.clearTargettxmetadata = function() {
  return this.setTargettxmetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.DualProof.prototype.hasTargettxmetadata = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated bytes inclusionProof = 3;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.immudb.schema.DualProof.prototype.getInclusionproofList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * repeated bytes inclusionProof = 3;
 * This is a type-conversion wrapper around `getInclusionproofList()`
 * @return {!Array<string>}
 */
proto.immudb.schema.DualProof.prototype.getInclusionproofList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getInclusionproofList()));
};


/**
 * repeated bytes inclusionProof = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getInclusionproofList()`
 * @return {!Array<!Uint8Array>}
 */
proto.immudb.schema.DualProof.prototype.getInclusionproofList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getInclusionproofList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.immudb.schema.DualProof} returns this
 */
proto.immudb.schema.DualProof.prototype.setInclusionproofList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.DualProof} returns this
 */
proto.immudb.schema.DualProof.prototype.addInclusionproof = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.DualProof} returns this
 */
proto.immudb.schema.DualProof.prototype.clearInclusionproofList = function() {
  return this.setInclusionproofList([]);
};


/**
 * repeated bytes consistencyProof = 4;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.immudb.schema.DualProof.prototype.getConsistencyproofList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * repeated bytes consistencyProof = 4;
 * This is a type-conversion wrapper around `getConsistencyproofList()`
 * @return {!Array<string>}
 */
proto.immudb.schema.DualProof.prototype.getConsistencyproofList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getConsistencyproofList()));
};


/**
 * repeated bytes consistencyProof = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getConsistencyproofList()`
 * @return {!Array<!Uint8Array>}
 */
proto.immudb.schema.DualProof.prototype.getConsistencyproofList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getConsistencyproofList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.immudb.schema.DualProof} returns this
 */
proto.immudb.schema.DualProof.prototype.setConsistencyproofList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.DualProof} returns this
 */
proto.immudb.schema.DualProof.prototype.addConsistencyproof = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.DualProof} returns this
 */
proto.immudb.schema.DualProof.prototype.clearConsistencyproofList = function() {
  return this.setConsistencyproofList([]);
};


/**
 * optional bytes targetBlTxAlh = 5;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.DualProof.prototype.getTargetbltxalh = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes targetBlTxAlh = 5;
 * This is a type-conversion wrapper around `getTargetbltxalh()`
 * @return {string}
 */
proto.immudb.schema.DualProof.prototype.getTargetbltxalh_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTargetbltxalh()));
};


/**
 * optional bytes targetBlTxAlh = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTargetbltxalh()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.DualProof.prototype.getTargetbltxalh_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTargetbltxalh()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.DualProof} returns this
 */
proto.immudb.schema.DualProof.prototype.setTargetbltxalh = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * repeated bytes lastInclusionProof = 6;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.immudb.schema.DualProof.prototype.getLastinclusionproofList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * repeated bytes lastInclusionProof = 6;
 * This is a type-conversion wrapper around `getLastinclusionproofList()`
 * @return {!Array<string>}
 */
proto.immudb.schema.DualProof.prototype.getLastinclusionproofList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getLastinclusionproofList()));
};


/**
 * repeated bytes lastInclusionProof = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getLastinclusionproofList()`
 * @return {!Array<!Uint8Array>}
 */
proto.immudb.schema.DualProof.prototype.getLastinclusionproofList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getLastinclusionproofList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.immudb.schema.DualProof} returns this
 */
proto.immudb.schema.DualProof.prototype.setLastinclusionproofList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.DualProof} returns this
 */
proto.immudb.schema.DualProof.prototype.addLastinclusionproof = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.DualProof} returns this
 */
proto.immudb.schema.DualProof.prototype.clearLastinclusionproofList = function() {
  return this.setLastinclusionproofList([]);
};


/**
 * optional LinearProof linearProof = 7;
 * @return {?proto.immudb.schema.LinearProof}
 */
proto.immudb.schema.DualProof.prototype.getLinearproof = function() {
  return /** @type{?proto.immudb.schema.LinearProof} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.LinearProof, 7));
};


/**
 * @param {?proto.immudb.schema.LinearProof|undefined} value
 * @return {!proto.immudb.schema.DualProof} returns this
*/
proto.immudb.schema.DualProof.prototype.setLinearproof = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.DualProof} returns this
 */
proto.immudb.schema.DualProof.prototype.clearLinearproof = function() {
  return this.setLinearproof(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.DualProof.prototype.hasLinearproof = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.immudb.schema.Tx.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.Tx.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.Tx.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.Tx} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Tx.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && proto.immudb.schema.TxMetadata.toObject(includeInstance, f),
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.immudb.schema.TxEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.Tx}
 */
proto.immudb.schema.Tx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.Tx;
  return proto.immudb.schema.Tx.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.Tx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.Tx}
 */
proto.immudb.schema.Tx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.immudb.schema.TxMetadata;
      reader.readMessage(value,proto.immudb.schema.TxMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.immudb.schema.TxEntry;
      reader.readMessage(value,proto.immudb.schema.TxEntry.deserializeBinaryFromReader);
      msg.addEntries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.Tx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.Tx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.Tx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Tx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.immudb.schema.TxMetadata.serializeBinaryToWriter
    );
  }
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.immudb.schema.TxEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional TxMetadata metadata = 1;
 * @return {?proto.immudb.schema.TxMetadata}
 */
proto.immudb.schema.Tx.prototype.getMetadata = function() {
  return /** @type{?proto.immudb.schema.TxMetadata} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.TxMetadata, 1));
};


/**
 * @param {?proto.immudb.schema.TxMetadata|undefined} value
 * @return {!proto.immudb.schema.Tx} returns this
*/
proto.immudb.schema.Tx.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.Tx} returns this
 */
proto.immudb.schema.Tx.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.Tx.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated TxEntry entries = 2;
 * @return {!Array<!proto.immudb.schema.TxEntry>}
 */
proto.immudb.schema.Tx.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.immudb.schema.TxEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.immudb.schema.TxEntry, 2));
};


/**
 * @param {!Array<!proto.immudb.schema.TxEntry>} value
 * @return {!proto.immudb.schema.Tx} returns this
*/
proto.immudb.schema.Tx.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.immudb.schema.TxEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.TxEntry}
 */
proto.immudb.schema.Tx.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.immudb.schema.TxEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.Tx} returns this
 */
proto.immudb.schema.Tx.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.TxEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.TxEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.TxEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.TxEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: msg.getKey_asB64(),
    hvalue: msg.getHvalue_asB64(),
    voff: jspb.Message.getFieldWithDefault(msg, 3, 0),
    vlen: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.TxEntry}
 */
proto.immudb.schema.TxEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.TxEntry;
  return proto.immudb.schema.TxEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.TxEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.TxEntry}
 */
proto.immudb.schema.TxEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHvalue(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVoff(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVlen(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.TxEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.TxEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.TxEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.TxEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getHvalue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getVoff();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getVlen();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional bytes key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.TxEntry.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes key = 1;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.immudb.schema.TxEntry.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.TxEntry.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.TxEntry} returns this
 */
proto.immudb.schema.TxEntry.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes hValue = 2;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.TxEntry.prototype.getHvalue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes hValue = 2;
 * This is a type-conversion wrapper around `getHvalue()`
 * @return {string}
 */
proto.immudb.schema.TxEntry.prototype.getHvalue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHvalue()));
};


/**
 * optional bytes hValue = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHvalue()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.TxEntry.prototype.getHvalue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHvalue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.TxEntry} returns this
 */
proto.immudb.schema.TxEntry.prototype.setHvalue = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional int64 vOff = 3;
 * @return {number}
 */
proto.immudb.schema.TxEntry.prototype.getVoff = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.TxEntry} returns this
 */
proto.immudb.schema.TxEntry.prototype.setVoff = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 vLen = 4;
 * @return {number}
 */
proto.immudb.schema.TxEntry.prototype.getVlen = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.TxEntry} returns this
 */
proto.immudb.schema.TxEntry.prototype.setVlen = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.VerifiableTx.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.VerifiableTx.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.VerifiableTx} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.VerifiableTx.toObject = function(includeInstance, msg) {
  var f, obj = {
    tx: (f = msg.getTx()) && proto.immudb.schema.Tx.toObject(includeInstance, f),
    dualproof: (f = msg.getDualproof()) && proto.immudb.schema.DualProof.toObject(includeInstance, f),
    signature: (f = msg.getSignature()) && proto.immudb.schema.Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.VerifiableTx}
 */
proto.immudb.schema.VerifiableTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.VerifiableTx;
  return proto.immudb.schema.VerifiableTx.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.VerifiableTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.VerifiableTx}
 */
proto.immudb.schema.VerifiableTx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.immudb.schema.Tx;
      reader.readMessage(value,proto.immudb.schema.Tx.deserializeBinaryFromReader);
      msg.setTx(value);
      break;
    case 2:
      var value = new proto.immudb.schema.DualProof;
      reader.readMessage(value,proto.immudb.schema.DualProof.deserializeBinaryFromReader);
      msg.setDualproof(value);
      break;
    case 3:
      var value = new proto.immudb.schema.Signature;
      reader.readMessage(value,proto.immudb.schema.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.VerifiableTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.VerifiableTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.VerifiableTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.VerifiableTx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.immudb.schema.Tx.serializeBinaryToWriter
    );
  }
  f = message.getDualproof();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.immudb.schema.DualProof.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.immudb.schema.Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional Tx tx = 1;
 * @return {?proto.immudb.schema.Tx}
 */
proto.immudb.schema.VerifiableTx.prototype.getTx = function() {
  return /** @type{?proto.immudb.schema.Tx} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.Tx, 1));
};


/**
 * @param {?proto.immudb.schema.Tx|undefined} value
 * @return {!proto.immudb.schema.VerifiableTx} returns this
*/
proto.immudb.schema.VerifiableTx.prototype.setTx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.VerifiableTx} returns this
 */
proto.immudb.schema.VerifiableTx.prototype.clearTx = function() {
  return this.setTx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.VerifiableTx.prototype.hasTx = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DualProof dualProof = 2;
 * @return {?proto.immudb.schema.DualProof}
 */
proto.immudb.schema.VerifiableTx.prototype.getDualproof = function() {
  return /** @type{?proto.immudb.schema.DualProof} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.DualProof, 2));
};


/**
 * @param {?proto.immudb.schema.DualProof|undefined} value
 * @return {!proto.immudb.schema.VerifiableTx} returns this
*/
proto.immudb.schema.VerifiableTx.prototype.setDualproof = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.VerifiableTx} returns this
 */
proto.immudb.schema.VerifiableTx.prototype.clearDualproof = function() {
  return this.setDualproof(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.VerifiableTx.prototype.hasDualproof = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Signature signature = 3;
 * @return {?proto.immudb.schema.Signature}
 */
proto.immudb.schema.VerifiableTx.prototype.getSignature = function() {
  return /** @type{?proto.immudb.schema.Signature} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.Signature, 3));
};


/**
 * @param {?proto.immudb.schema.Signature|undefined} value
 * @return {!proto.immudb.schema.VerifiableTx} returns this
*/
proto.immudb.schema.VerifiableTx.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.VerifiableTx} returns this
 */
proto.immudb.schema.VerifiableTx.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.VerifiableTx.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.VerifiableEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.VerifiableEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.VerifiableEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.VerifiableEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    entry: (f = msg.getEntry()) && proto.immudb.schema.Entry.toObject(includeInstance, f),
    verifiabletx: (f = msg.getVerifiabletx()) && proto.immudb.schema.VerifiableTx.toObject(includeInstance, f),
    inclusionproof: (f = msg.getInclusionproof()) && proto.immudb.schema.InclusionProof.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.VerifiableEntry}
 */
proto.immudb.schema.VerifiableEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.VerifiableEntry;
  return proto.immudb.schema.VerifiableEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.VerifiableEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.VerifiableEntry}
 */
proto.immudb.schema.VerifiableEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.immudb.schema.Entry;
      reader.readMessage(value,proto.immudb.schema.Entry.deserializeBinaryFromReader);
      msg.setEntry(value);
      break;
    case 2:
      var value = new proto.immudb.schema.VerifiableTx;
      reader.readMessage(value,proto.immudb.schema.VerifiableTx.deserializeBinaryFromReader);
      msg.setVerifiabletx(value);
      break;
    case 3:
      var value = new proto.immudb.schema.InclusionProof;
      reader.readMessage(value,proto.immudb.schema.InclusionProof.deserializeBinaryFromReader);
      msg.setInclusionproof(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.VerifiableEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.VerifiableEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.VerifiableEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.VerifiableEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntry();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.immudb.schema.Entry.serializeBinaryToWriter
    );
  }
  f = message.getVerifiabletx();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.immudb.schema.VerifiableTx.serializeBinaryToWriter
    );
  }
  f = message.getInclusionproof();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.immudb.schema.InclusionProof.serializeBinaryToWriter
    );
  }
};


/**
 * optional Entry entry = 1;
 * @return {?proto.immudb.schema.Entry}
 */
proto.immudb.schema.VerifiableEntry.prototype.getEntry = function() {
  return /** @type{?proto.immudb.schema.Entry} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.Entry, 1));
};


/**
 * @param {?proto.immudb.schema.Entry|undefined} value
 * @return {!proto.immudb.schema.VerifiableEntry} returns this
*/
proto.immudb.schema.VerifiableEntry.prototype.setEntry = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.VerifiableEntry} returns this
 */
proto.immudb.schema.VerifiableEntry.prototype.clearEntry = function() {
  return this.setEntry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.VerifiableEntry.prototype.hasEntry = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VerifiableTx verifiableTx = 2;
 * @return {?proto.immudb.schema.VerifiableTx}
 */
proto.immudb.schema.VerifiableEntry.prototype.getVerifiabletx = function() {
  return /** @type{?proto.immudb.schema.VerifiableTx} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.VerifiableTx, 2));
};


/**
 * @param {?proto.immudb.schema.VerifiableTx|undefined} value
 * @return {!proto.immudb.schema.VerifiableEntry} returns this
*/
proto.immudb.schema.VerifiableEntry.prototype.setVerifiabletx = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.VerifiableEntry} returns this
 */
proto.immudb.schema.VerifiableEntry.prototype.clearVerifiabletx = function() {
  return this.setVerifiabletx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.VerifiableEntry.prototype.hasVerifiabletx = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional InclusionProof inclusionProof = 3;
 * @return {?proto.immudb.schema.InclusionProof}
 */
proto.immudb.schema.VerifiableEntry.prototype.getInclusionproof = function() {
  return /** @type{?proto.immudb.schema.InclusionProof} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.InclusionProof, 3));
};


/**
 * @param {?proto.immudb.schema.InclusionProof|undefined} value
 * @return {!proto.immudb.schema.VerifiableEntry} returns this
*/
proto.immudb.schema.VerifiableEntry.prototype.setInclusionproof = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.VerifiableEntry} returns this
 */
proto.immudb.schema.VerifiableEntry.prototype.clearInclusionproof = function() {
  return this.setInclusionproof(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.VerifiableEntry.prototype.hasInclusionproof = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.immudb.schema.InclusionProof.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.InclusionProof.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.InclusionProof.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.InclusionProof} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.InclusionProof.toObject = function(includeInstance, msg) {
  var f, obj = {
    leaf: jspb.Message.getFieldWithDefault(msg, 1, 0),
    width: jspb.Message.getFieldWithDefault(msg, 2, 0),
    termsList: msg.getTermsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.InclusionProof}
 */
proto.immudb.schema.InclusionProof.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.InclusionProof;
  return proto.immudb.schema.InclusionProof.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.InclusionProof} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.InclusionProof}
 */
proto.immudb.schema.InclusionProof.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeaf(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWidth(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addTerms(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.InclusionProof.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.InclusionProof.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.InclusionProof} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.InclusionProof.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeaf();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTermsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      3,
      f
    );
  }
};


/**
 * optional int32 leaf = 1;
 * @return {number}
 */
proto.immudb.schema.InclusionProof.prototype.getLeaf = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.InclusionProof} returns this
 */
proto.immudb.schema.InclusionProof.prototype.setLeaf = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 width = 2;
 * @return {number}
 */
proto.immudb.schema.InclusionProof.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.InclusionProof} returns this
 */
proto.immudb.schema.InclusionProof.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated bytes terms = 3;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.immudb.schema.InclusionProof.prototype.getTermsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * repeated bytes terms = 3;
 * This is a type-conversion wrapper around `getTermsList()`
 * @return {!Array<string>}
 */
proto.immudb.schema.InclusionProof.prototype.getTermsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getTermsList()));
};


/**
 * repeated bytes terms = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTermsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.immudb.schema.InclusionProof.prototype.getTermsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getTermsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.immudb.schema.InclusionProof} returns this
 */
proto.immudb.schema.InclusionProof.prototype.setTermsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.InclusionProof} returns this
 */
proto.immudb.schema.InclusionProof.prototype.addTerms = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.InclusionProof} returns this
 */
proto.immudb.schema.InclusionProof.prototype.clearTermsList = function() {
  return this.setTermsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.immudb.schema.SetRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.SetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.SetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.SetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.SetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    kvsList: jspb.Message.toObjectList(msg.getKvsList(),
    proto.immudb.schema.KeyValue.toObject, includeInstance),
    nowait: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.SetRequest}
 */
proto.immudb.schema.SetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.SetRequest;
  return proto.immudb.schema.SetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.SetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.SetRequest}
 */
proto.immudb.schema.SetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.immudb.schema.KeyValue;
      reader.readMessage(value,proto.immudb.schema.KeyValue.deserializeBinaryFromReader);
      msg.addKvs(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNowait(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.SetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.SetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.SetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.SetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKvsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.immudb.schema.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getNowait();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * repeated KeyValue KVs = 1;
 * @return {!Array<!proto.immudb.schema.KeyValue>}
 */
proto.immudb.schema.SetRequest.prototype.getKvsList = function() {
  return /** @type{!Array<!proto.immudb.schema.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.immudb.schema.KeyValue, 1));
};


/**
 * @param {!Array<!proto.immudb.schema.KeyValue>} value
 * @return {!proto.immudb.schema.SetRequest} returns this
*/
proto.immudb.schema.SetRequest.prototype.setKvsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.immudb.schema.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.KeyValue}
 */
proto.immudb.schema.SetRequest.prototype.addKvs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.immudb.schema.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.SetRequest} returns this
 */
proto.immudb.schema.SetRequest.prototype.clearKvsList = function() {
  return this.setKvsList([]);
};


/**
 * optional bool noWait = 2;
 * @return {boolean}
 */
proto.immudb.schema.SetRequest.prototype.getNowait = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.immudb.schema.SetRequest} returns this
 */
proto.immudb.schema.SetRequest.prototype.setNowait = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.KeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.KeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.KeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.KeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: msg.getKey_asB64(),
    attx: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sincetx: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.KeyRequest}
 */
proto.immudb.schema.KeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.KeyRequest;
  return proto.immudb.schema.KeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.KeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.KeyRequest}
 */
proto.immudb.schema.KeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAttx(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSincetx(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.KeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.KeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.KeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.KeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAttx();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getSincetx();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional bytes key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.KeyRequest.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes key = 1;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.immudb.schema.KeyRequest.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.KeyRequest.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.KeyRequest} returns this
 */
proto.immudb.schema.KeyRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint64 atTx = 2;
 * @return {number}
 */
proto.immudb.schema.KeyRequest.prototype.getAttx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.KeyRequest} returns this
 */
proto.immudb.schema.KeyRequest.prototype.setAttx = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 sinceTx = 3;
 * @return {number}
 */
proto.immudb.schema.KeyRequest.prototype.getSincetx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.KeyRequest} returns this
 */
proto.immudb.schema.KeyRequest.prototype.setSincetx = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.immudb.schema.KeyListRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.KeyListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.KeyListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.KeyListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.KeyListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    keysList: msg.getKeysList_asB64(),
    sincetx: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.KeyListRequest}
 */
proto.immudb.schema.KeyListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.KeyListRequest;
  return proto.immudb.schema.KeyListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.KeyListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.KeyListRequest}
 */
proto.immudb.schema.KeyListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addKeys(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSincetx(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.KeyListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.KeyListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.KeyListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.KeyListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeysList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
  f = message.getSincetx();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * repeated bytes keys = 1;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.immudb.schema.KeyListRequest.prototype.getKeysList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes keys = 1;
 * This is a type-conversion wrapper around `getKeysList()`
 * @return {!Array<string>}
 */
proto.immudb.schema.KeyListRequest.prototype.getKeysList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getKeysList()));
};


/**
 * repeated bytes keys = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKeysList()`
 * @return {!Array<!Uint8Array>}
 */
proto.immudb.schema.KeyListRequest.prototype.getKeysList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getKeysList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.immudb.schema.KeyListRequest} returns this
 */
proto.immudb.schema.KeyListRequest.prototype.setKeysList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.KeyListRequest} returns this
 */
proto.immudb.schema.KeyListRequest.prototype.addKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.KeyListRequest} returns this
 */
proto.immudb.schema.KeyListRequest.prototype.clearKeysList = function() {
  return this.setKeysList([]);
};


/**
 * optional uint64 sinceTx = 2;
 * @return {number}
 */
proto.immudb.schema.KeyListRequest.prototype.getSincetx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.KeyListRequest} returns this
 */
proto.immudb.schema.KeyListRequest.prototype.setSincetx = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.VerifiableSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.VerifiableSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.VerifiableSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.VerifiableSetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    setrequest: (f = msg.getSetrequest()) && proto.immudb.schema.SetRequest.toObject(includeInstance, f),
    provesincetx: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.VerifiableSetRequest}
 */
proto.immudb.schema.VerifiableSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.VerifiableSetRequest;
  return proto.immudb.schema.VerifiableSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.VerifiableSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.VerifiableSetRequest}
 */
proto.immudb.schema.VerifiableSetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.immudb.schema.SetRequest;
      reader.readMessage(value,proto.immudb.schema.SetRequest.deserializeBinaryFromReader);
      msg.setSetrequest(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProvesincetx(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.VerifiableSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.VerifiableSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.VerifiableSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.VerifiableSetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSetrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.immudb.schema.SetRequest.serializeBinaryToWriter
    );
  }
  f = message.getProvesincetx();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional SetRequest setRequest = 1;
 * @return {?proto.immudb.schema.SetRequest}
 */
proto.immudb.schema.VerifiableSetRequest.prototype.getSetrequest = function() {
  return /** @type{?proto.immudb.schema.SetRequest} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.SetRequest, 1));
};


/**
 * @param {?proto.immudb.schema.SetRequest|undefined} value
 * @return {!proto.immudb.schema.VerifiableSetRequest} returns this
*/
proto.immudb.schema.VerifiableSetRequest.prototype.setSetrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.VerifiableSetRequest} returns this
 */
proto.immudb.schema.VerifiableSetRequest.prototype.clearSetrequest = function() {
  return this.setSetrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.VerifiableSetRequest.prototype.hasSetrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 proveSinceTx = 2;
 * @return {number}
 */
proto.immudb.schema.VerifiableSetRequest.prototype.getProvesincetx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.VerifiableSetRequest} returns this
 */
proto.immudb.schema.VerifiableSetRequest.prototype.setProvesincetx = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.VerifiableGetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.VerifiableGetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.VerifiableGetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.VerifiableGetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyrequest: (f = msg.getKeyrequest()) && proto.immudb.schema.KeyRequest.toObject(includeInstance, f),
    provesincetx: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.VerifiableGetRequest}
 */
proto.immudb.schema.VerifiableGetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.VerifiableGetRequest;
  return proto.immudb.schema.VerifiableGetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.VerifiableGetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.VerifiableGetRequest}
 */
proto.immudb.schema.VerifiableGetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.immudb.schema.KeyRequest;
      reader.readMessage(value,proto.immudb.schema.KeyRequest.deserializeBinaryFromReader);
      msg.setKeyrequest(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProvesincetx(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.VerifiableGetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.VerifiableGetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.VerifiableGetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.VerifiableGetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.immudb.schema.KeyRequest.serializeBinaryToWriter
    );
  }
  f = message.getProvesincetx();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional KeyRequest keyRequest = 1;
 * @return {?proto.immudb.schema.KeyRequest}
 */
proto.immudb.schema.VerifiableGetRequest.prototype.getKeyrequest = function() {
  return /** @type{?proto.immudb.schema.KeyRequest} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.KeyRequest, 1));
};


/**
 * @param {?proto.immudb.schema.KeyRequest|undefined} value
 * @return {!proto.immudb.schema.VerifiableGetRequest} returns this
*/
proto.immudb.schema.VerifiableGetRequest.prototype.setKeyrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.VerifiableGetRequest} returns this
 */
proto.immudb.schema.VerifiableGetRequest.prototype.clearKeyrequest = function() {
  return this.setKeyrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.VerifiableGetRequest.prototype.hasKeyrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 proveSinceTx = 2;
 * @return {number}
 */
proto.immudb.schema.VerifiableGetRequest.prototype.getProvesincetx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.VerifiableGetRequest} returns this
 */
proto.immudb.schema.VerifiableGetRequest.prototype.setProvesincetx = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.HealthResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.HealthResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.HealthResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.HealthResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    version: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.HealthResponse}
 */
proto.immudb.schema.HealthResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.HealthResponse;
  return proto.immudb.schema.HealthResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.HealthResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.HealthResponse}
 */
proto.immudb.schema.HealthResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.HealthResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.HealthResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.HealthResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.HealthResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool status = 1;
 * @return {boolean}
 */
proto.immudb.schema.HealthResponse.prototype.getStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.immudb.schema.HealthResponse} returns this
 */
proto.immudb.schema.HealthResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.immudb.schema.HealthResponse.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.immudb.schema.HealthResponse} returns this
 */
proto.immudb.schema.HealthResponse.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.ImmutableState.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.ImmutableState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.ImmutableState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.ImmutableState.toObject = function(includeInstance, msg) {
  var f, obj = {
    db: jspb.Message.getFieldWithDefault(msg, 1, ""),
    txid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    txhash: msg.getTxhash_asB64(),
    signature: (f = msg.getSignature()) && proto.immudb.schema.Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.ImmutableState}
 */
proto.immudb.schema.ImmutableState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.ImmutableState;
  return proto.immudb.schema.ImmutableState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.ImmutableState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.ImmutableState}
 */
proto.immudb.schema.ImmutableState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDb(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxid(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTxhash(value);
      break;
    case 4:
      var value = new proto.immudb.schema.Signature;
      reader.readMessage(value,proto.immudb.schema.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.ImmutableState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.ImmutableState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.ImmutableState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.ImmutableState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDb();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTxid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTxhash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.immudb.schema.Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional string db = 1;
 * @return {string}
 */
proto.immudb.schema.ImmutableState.prototype.getDb = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.immudb.schema.ImmutableState} returns this
 */
proto.immudb.schema.ImmutableState.prototype.setDb = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 txId = 2;
 * @return {number}
 */
proto.immudb.schema.ImmutableState.prototype.getTxid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.ImmutableState} returns this
 */
proto.immudb.schema.ImmutableState.prototype.setTxid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes txHash = 3;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.ImmutableState.prototype.getTxhash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes txHash = 3;
 * This is a type-conversion wrapper around `getTxhash()`
 * @return {string}
 */
proto.immudb.schema.ImmutableState.prototype.getTxhash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTxhash()));
};


/**
 * optional bytes txHash = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTxhash()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.ImmutableState.prototype.getTxhash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTxhash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.ImmutableState} returns this
 */
proto.immudb.schema.ImmutableState.prototype.setTxhash = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional Signature signature = 4;
 * @return {?proto.immudb.schema.Signature}
 */
proto.immudb.schema.ImmutableState.prototype.getSignature = function() {
  return /** @type{?proto.immudb.schema.Signature} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.Signature, 4));
};


/**
 * @param {?proto.immudb.schema.Signature|undefined} value
 * @return {!proto.immudb.schema.ImmutableState} returns this
*/
proto.immudb.schema.ImmutableState.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.ImmutableState} returns this
 */
proto.immudb.schema.ImmutableState.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.ImmutableState.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.ReferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.ReferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.ReferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.ReferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: msg.getKey_asB64(),
    referencedkey: msg.getReferencedkey_asB64(),
    attx: jspb.Message.getFieldWithDefault(msg, 3, 0),
    boundref: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    nowait: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.ReferenceRequest}
 */
proto.immudb.schema.ReferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.ReferenceRequest;
  return proto.immudb.schema.ReferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.ReferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.ReferenceRequest}
 */
proto.immudb.schema.ReferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setReferencedkey(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAttx(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoundref(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNowait(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.ReferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.ReferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.ReferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.ReferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getReferencedkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getAttx();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getBoundref();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getNowait();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional bytes key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.ReferenceRequest.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes key = 1;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.immudb.schema.ReferenceRequest.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.ReferenceRequest.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.ReferenceRequest} returns this
 */
proto.immudb.schema.ReferenceRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes referencedKey = 2;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.ReferenceRequest.prototype.getReferencedkey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes referencedKey = 2;
 * This is a type-conversion wrapper around `getReferencedkey()`
 * @return {string}
 */
proto.immudb.schema.ReferenceRequest.prototype.getReferencedkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getReferencedkey()));
};


/**
 * optional bytes referencedKey = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getReferencedkey()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.ReferenceRequest.prototype.getReferencedkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getReferencedkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.ReferenceRequest} returns this
 */
proto.immudb.schema.ReferenceRequest.prototype.setReferencedkey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint64 atTx = 3;
 * @return {number}
 */
proto.immudb.schema.ReferenceRequest.prototype.getAttx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.ReferenceRequest} returns this
 */
proto.immudb.schema.ReferenceRequest.prototype.setAttx = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool boundRef = 4;
 * @return {boolean}
 */
proto.immudb.schema.ReferenceRequest.prototype.getBoundref = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.immudb.schema.ReferenceRequest} returns this
 */
proto.immudb.schema.ReferenceRequest.prototype.setBoundref = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool noWait = 5;
 * @return {boolean}
 */
proto.immudb.schema.ReferenceRequest.prototype.getNowait = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.immudb.schema.ReferenceRequest} returns this
 */
proto.immudb.schema.ReferenceRequest.prototype.setNowait = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.VerifiableReferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.VerifiableReferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.VerifiableReferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.VerifiableReferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    referencerequest: (f = msg.getReferencerequest()) && proto.immudb.schema.ReferenceRequest.toObject(includeInstance, f),
    provesincetx: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.VerifiableReferenceRequest}
 */
proto.immudb.schema.VerifiableReferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.VerifiableReferenceRequest;
  return proto.immudb.schema.VerifiableReferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.VerifiableReferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.VerifiableReferenceRequest}
 */
proto.immudb.schema.VerifiableReferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.immudb.schema.ReferenceRequest;
      reader.readMessage(value,proto.immudb.schema.ReferenceRequest.deserializeBinaryFromReader);
      msg.setReferencerequest(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProvesincetx(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.VerifiableReferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.VerifiableReferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.VerifiableReferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.VerifiableReferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReferencerequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.immudb.schema.ReferenceRequest.serializeBinaryToWriter
    );
  }
  f = message.getProvesincetx();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional ReferenceRequest referenceRequest = 1;
 * @return {?proto.immudb.schema.ReferenceRequest}
 */
proto.immudb.schema.VerifiableReferenceRequest.prototype.getReferencerequest = function() {
  return /** @type{?proto.immudb.schema.ReferenceRequest} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.ReferenceRequest, 1));
};


/**
 * @param {?proto.immudb.schema.ReferenceRequest|undefined} value
 * @return {!proto.immudb.schema.VerifiableReferenceRequest} returns this
*/
proto.immudb.schema.VerifiableReferenceRequest.prototype.setReferencerequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.VerifiableReferenceRequest} returns this
 */
proto.immudb.schema.VerifiableReferenceRequest.prototype.clearReferencerequest = function() {
  return this.setReferencerequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.VerifiableReferenceRequest.prototype.hasReferencerequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 proveSinceTx = 2;
 * @return {number}
 */
proto.immudb.schema.VerifiableReferenceRequest.prototype.getProvesincetx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.VerifiableReferenceRequest} returns this
 */
proto.immudb.schema.VerifiableReferenceRequest.prototype.setProvesincetx = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.ZAddRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.ZAddRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.ZAddRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.ZAddRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    set: msg.getSet_asB64(),
    score: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    key: msg.getKey_asB64(),
    attx: jspb.Message.getFieldWithDefault(msg, 4, 0),
    boundref: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    nowait: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.ZAddRequest}
 */
proto.immudb.schema.ZAddRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.ZAddRequest;
  return proto.immudb.schema.ZAddRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.ZAddRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.ZAddRequest}
 */
proto.immudb.schema.ZAddRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSet(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setScore(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAttx(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoundref(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNowait(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.ZAddRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.ZAddRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.ZAddRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.ZAddRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSet_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getScore();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getAttx();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getBoundref();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getNowait();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional bytes set = 1;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.ZAddRequest.prototype.getSet = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes set = 1;
 * This is a type-conversion wrapper around `getSet()`
 * @return {string}
 */
proto.immudb.schema.ZAddRequest.prototype.getSet_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSet()));
};


/**
 * optional bytes set = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSet()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.ZAddRequest.prototype.getSet_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSet()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.ZAddRequest} returns this
 */
proto.immudb.schema.ZAddRequest.prototype.setSet = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional double score = 2;
 * @return {number}
 */
proto.immudb.schema.ZAddRequest.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.ZAddRequest} returns this
 */
proto.immudb.schema.ZAddRequest.prototype.setScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional bytes key = 3;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.ZAddRequest.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes key = 3;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.immudb.schema.ZAddRequest.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.ZAddRequest.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.ZAddRequest} returns this
 */
proto.immudb.schema.ZAddRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional uint64 atTx = 4;
 * @return {number}
 */
proto.immudb.schema.ZAddRequest.prototype.getAttx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.ZAddRequest} returns this
 */
proto.immudb.schema.ZAddRequest.prototype.setAttx = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool boundRef = 5;
 * @return {boolean}
 */
proto.immudb.schema.ZAddRequest.prototype.getBoundref = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.immudb.schema.ZAddRequest} returns this
 */
proto.immudb.schema.ZAddRequest.prototype.setBoundref = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool noWait = 6;
 * @return {boolean}
 */
proto.immudb.schema.ZAddRequest.prototype.getNowait = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.immudb.schema.ZAddRequest} returns this
 */
proto.immudb.schema.ZAddRequest.prototype.setNowait = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.Score.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.Score.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.Score} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Score.toObject = function(includeInstance, msg) {
  var f, obj = {
    score: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.Score}
 */
proto.immudb.schema.Score.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.Score;
  return proto.immudb.schema.Score.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.Score} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.Score}
 */
proto.immudb.schema.Score.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setScore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.Score.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.Score.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.Score} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Score.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScore();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double score = 1;
 * @return {number}
 */
proto.immudb.schema.Score.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.Score} returns this
 */
proto.immudb.schema.Score.prototype.setScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.ZScanRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.ZScanRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.ZScanRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.ZScanRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    set: msg.getSet_asB64(),
    seekkey: msg.getSeekkey_asB64(),
    seekscore: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    seekattx: jspb.Message.getFieldWithDefault(msg, 4, 0),
    inclusiveseek: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    limit: jspb.Message.getFieldWithDefault(msg, 6, 0),
    desc: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    minscore: (f = msg.getMinscore()) && proto.immudb.schema.Score.toObject(includeInstance, f),
    maxscore: (f = msg.getMaxscore()) && proto.immudb.schema.Score.toObject(includeInstance, f),
    sincetx: jspb.Message.getFieldWithDefault(msg, 10, 0),
    nowait: jspb.Message.getBooleanFieldWithDefault(msg, 11, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.ZScanRequest}
 */
proto.immudb.schema.ZScanRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.ZScanRequest;
  return proto.immudb.schema.ZScanRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.ZScanRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.ZScanRequest}
 */
proto.immudb.schema.ZScanRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSet(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSeekkey(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSeekscore(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSeekattx(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInclusiveseek(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDesc(value);
      break;
    case 8:
      var value = new proto.immudb.schema.Score;
      reader.readMessage(value,proto.immudb.schema.Score.deserializeBinaryFromReader);
      msg.setMinscore(value);
      break;
    case 9:
      var value = new proto.immudb.schema.Score;
      reader.readMessage(value,proto.immudb.schema.Score.deserializeBinaryFromReader);
      msg.setMaxscore(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSincetx(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNowait(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.ZScanRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.ZScanRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.ZScanRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.ZScanRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSet_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSeekkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSeekscore();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getSeekattx();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getInclusiveseek();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getDesc();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getMinscore();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.immudb.schema.Score.serializeBinaryToWriter
    );
  }
  f = message.getMaxscore();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.immudb.schema.Score.serializeBinaryToWriter
    );
  }
  f = message.getSincetx();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getNowait();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
};


/**
 * optional bytes set = 1;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.ZScanRequest.prototype.getSet = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes set = 1;
 * This is a type-conversion wrapper around `getSet()`
 * @return {string}
 */
proto.immudb.schema.ZScanRequest.prototype.getSet_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSet()));
};


/**
 * optional bytes set = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSet()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.ZScanRequest.prototype.getSet_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSet()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.ZScanRequest} returns this
 */
proto.immudb.schema.ZScanRequest.prototype.setSet = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes seekKey = 2;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.ZScanRequest.prototype.getSeekkey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes seekKey = 2;
 * This is a type-conversion wrapper around `getSeekkey()`
 * @return {string}
 */
proto.immudb.schema.ZScanRequest.prototype.getSeekkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSeekkey()));
};


/**
 * optional bytes seekKey = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSeekkey()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.ZScanRequest.prototype.getSeekkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSeekkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.ZScanRequest} returns this
 */
proto.immudb.schema.ZScanRequest.prototype.setSeekkey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional double seekScore = 3;
 * @return {number}
 */
proto.immudb.schema.ZScanRequest.prototype.getSeekscore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.ZScanRequest} returns this
 */
proto.immudb.schema.ZScanRequest.prototype.setSeekscore = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional uint64 seekAtTx = 4;
 * @return {number}
 */
proto.immudb.schema.ZScanRequest.prototype.getSeekattx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.ZScanRequest} returns this
 */
proto.immudb.schema.ZScanRequest.prototype.setSeekattx = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool inclusiveSeek = 5;
 * @return {boolean}
 */
proto.immudb.schema.ZScanRequest.prototype.getInclusiveseek = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.immudb.schema.ZScanRequest} returns this
 */
proto.immudb.schema.ZScanRequest.prototype.setInclusiveseek = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional uint64 limit = 6;
 * @return {number}
 */
proto.immudb.schema.ZScanRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.ZScanRequest} returns this
 */
proto.immudb.schema.ZScanRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool desc = 7;
 * @return {boolean}
 */
proto.immudb.schema.ZScanRequest.prototype.getDesc = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.immudb.schema.ZScanRequest} returns this
 */
proto.immudb.schema.ZScanRequest.prototype.setDesc = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional Score minScore = 8;
 * @return {?proto.immudb.schema.Score}
 */
proto.immudb.schema.ZScanRequest.prototype.getMinscore = function() {
  return /** @type{?proto.immudb.schema.Score} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.Score, 8));
};


/**
 * @param {?proto.immudb.schema.Score|undefined} value
 * @return {!proto.immudb.schema.ZScanRequest} returns this
*/
proto.immudb.schema.ZScanRequest.prototype.setMinscore = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.ZScanRequest} returns this
 */
proto.immudb.schema.ZScanRequest.prototype.clearMinscore = function() {
  return this.setMinscore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.ZScanRequest.prototype.hasMinscore = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Score maxScore = 9;
 * @return {?proto.immudb.schema.Score}
 */
proto.immudb.schema.ZScanRequest.prototype.getMaxscore = function() {
  return /** @type{?proto.immudb.schema.Score} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.Score, 9));
};


/**
 * @param {?proto.immudb.schema.Score|undefined} value
 * @return {!proto.immudb.schema.ZScanRequest} returns this
*/
proto.immudb.schema.ZScanRequest.prototype.setMaxscore = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.ZScanRequest} returns this
 */
proto.immudb.schema.ZScanRequest.prototype.clearMaxscore = function() {
  return this.setMaxscore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.ZScanRequest.prototype.hasMaxscore = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint64 sinceTx = 10;
 * @return {number}
 */
proto.immudb.schema.ZScanRequest.prototype.getSincetx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.ZScanRequest} returns this
 */
proto.immudb.schema.ZScanRequest.prototype.setSincetx = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional bool noWait = 11;
 * @return {boolean}
 */
proto.immudb.schema.ZScanRequest.prototype.getNowait = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.immudb.schema.ZScanRequest} returns this
 */
proto.immudb.schema.ZScanRequest.prototype.setNowait = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.HistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.HistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.HistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.HistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: msg.getKey_asB64(),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    desc: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    sincetx: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.HistoryRequest}
 */
proto.immudb.schema.HistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.HistoryRequest;
  return proto.immudb.schema.HistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.HistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.HistoryRequest}
 */
proto.immudb.schema.HistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDesc(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSincetx(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.HistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.HistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.HistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.HistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getDesc();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getSincetx();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional bytes key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.HistoryRequest.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes key = 1;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.immudb.schema.HistoryRequest.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.HistoryRequest.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.HistoryRequest} returns this
 */
proto.immudb.schema.HistoryRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.immudb.schema.HistoryRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.HistoryRequest} returns this
 */
proto.immudb.schema.HistoryRequest.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 limit = 3;
 * @return {number}
 */
proto.immudb.schema.HistoryRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.HistoryRequest} returns this
 */
proto.immudb.schema.HistoryRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool desc = 4;
 * @return {boolean}
 */
proto.immudb.schema.HistoryRequest.prototype.getDesc = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.immudb.schema.HistoryRequest} returns this
 */
proto.immudb.schema.HistoryRequest.prototype.setDesc = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional uint64 sinceTx = 5;
 * @return {number}
 */
proto.immudb.schema.HistoryRequest.prototype.getSincetx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.HistoryRequest} returns this
 */
proto.immudb.schema.HistoryRequest.prototype.setSincetx = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.VerifiableZAddRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.VerifiableZAddRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.VerifiableZAddRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.VerifiableZAddRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    zaddrequest: (f = msg.getZaddrequest()) && proto.immudb.schema.ZAddRequest.toObject(includeInstance, f),
    provesincetx: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.VerifiableZAddRequest}
 */
proto.immudb.schema.VerifiableZAddRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.VerifiableZAddRequest;
  return proto.immudb.schema.VerifiableZAddRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.VerifiableZAddRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.VerifiableZAddRequest}
 */
proto.immudb.schema.VerifiableZAddRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.immudb.schema.ZAddRequest;
      reader.readMessage(value,proto.immudb.schema.ZAddRequest.deserializeBinaryFromReader);
      msg.setZaddrequest(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProvesincetx(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.VerifiableZAddRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.VerifiableZAddRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.VerifiableZAddRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.VerifiableZAddRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZaddrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.immudb.schema.ZAddRequest.serializeBinaryToWriter
    );
  }
  f = message.getProvesincetx();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional ZAddRequest zAddRequest = 1;
 * @return {?proto.immudb.schema.ZAddRequest}
 */
proto.immudb.schema.VerifiableZAddRequest.prototype.getZaddrequest = function() {
  return /** @type{?proto.immudb.schema.ZAddRequest} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.ZAddRequest, 1));
};


/**
 * @param {?proto.immudb.schema.ZAddRequest|undefined} value
 * @return {!proto.immudb.schema.VerifiableZAddRequest} returns this
*/
proto.immudb.schema.VerifiableZAddRequest.prototype.setZaddrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.VerifiableZAddRequest} returns this
 */
proto.immudb.schema.VerifiableZAddRequest.prototype.clearZaddrequest = function() {
  return this.setZaddrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.VerifiableZAddRequest.prototype.hasZaddrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 proveSinceTx = 2;
 * @return {number}
 */
proto.immudb.schema.VerifiableZAddRequest.prototype.getProvesincetx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.VerifiableZAddRequest} returns this
 */
proto.immudb.schema.VerifiableZAddRequest.prototype.setProvesincetx = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.TxRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.TxRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.TxRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.TxRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tx: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.TxRequest}
 */
proto.immudb.schema.TxRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.TxRequest;
  return proto.immudb.schema.TxRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.TxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.TxRequest}
 */
proto.immudb.schema.TxRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTx(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.TxRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.TxRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.TxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.TxRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTx();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 tx = 1;
 * @return {number}
 */
proto.immudb.schema.TxRequest.prototype.getTx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.TxRequest} returns this
 */
proto.immudb.schema.TxRequest.prototype.setTx = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.VerifiableTxRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.VerifiableTxRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.VerifiableTxRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.VerifiableTxRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tx: jspb.Message.getFieldWithDefault(msg, 1, 0),
    provesincetx: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.VerifiableTxRequest}
 */
proto.immudb.schema.VerifiableTxRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.VerifiableTxRequest;
  return proto.immudb.schema.VerifiableTxRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.VerifiableTxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.VerifiableTxRequest}
 */
proto.immudb.schema.VerifiableTxRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTx(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProvesincetx(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.VerifiableTxRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.VerifiableTxRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.VerifiableTxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.VerifiableTxRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTx();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getProvesincetx();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 tx = 1;
 * @return {number}
 */
proto.immudb.schema.VerifiableTxRequest.prototype.getTx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.VerifiableTxRequest} returns this
 */
proto.immudb.schema.VerifiableTxRequest.prototype.setTx = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 proveSinceTx = 2;
 * @return {number}
 */
proto.immudb.schema.VerifiableTxRequest.prototype.getProvesincetx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.VerifiableTxRequest} returns this
 */
proto.immudb.schema.VerifiableTxRequest.prototype.setProvesincetx = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.TxScanRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.TxScanRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.TxScanRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.TxScanRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    initialtx: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    desc: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.TxScanRequest}
 */
proto.immudb.schema.TxScanRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.TxScanRequest;
  return proto.immudb.schema.TxScanRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.TxScanRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.TxScanRequest}
 */
proto.immudb.schema.TxScanRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setInitialtx(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDesc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.TxScanRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.TxScanRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.TxScanRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.TxScanRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInitialtx();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getDesc();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional uint64 initialTx = 1;
 * @return {number}
 */
proto.immudb.schema.TxScanRequest.prototype.getInitialtx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.TxScanRequest} returns this
 */
proto.immudb.schema.TxScanRequest.prototype.setInitialtx = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 limit = 2;
 * @return {number}
 */
proto.immudb.schema.TxScanRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.TxScanRequest} returns this
 */
proto.immudb.schema.TxScanRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool desc = 3;
 * @return {boolean}
 */
proto.immudb.schema.TxScanRequest.prototype.getDesc = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.immudb.schema.TxScanRequest} returns this
 */
proto.immudb.schema.TxScanRequest.prototype.setDesc = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.immudb.schema.TxList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.TxList.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.TxList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.TxList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.TxList.toObject = function(includeInstance, msg) {
  var f, obj = {
    txsList: jspb.Message.toObjectList(msg.getTxsList(),
    proto.immudb.schema.Tx.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.TxList}
 */
proto.immudb.schema.TxList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.TxList;
  return proto.immudb.schema.TxList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.TxList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.TxList}
 */
proto.immudb.schema.TxList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.immudb.schema.Tx;
      reader.readMessage(value,proto.immudb.schema.Tx.deserializeBinaryFromReader);
      msg.addTxs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.TxList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.TxList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.TxList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.TxList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.immudb.schema.Tx.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Tx txs = 1;
 * @return {!Array<!proto.immudb.schema.Tx>}
 */
proto.immudb.schema.TxList.prototype.getTxsList = function() {
  return /** @type{!Array<!proto.immudb.schema.Tx>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.immudb.schema.Tx, 1));
};


/**
 * @param {!Array<!proto.immudb.schema.Tx>} value
 * @return {!proto.immudb.schema.TxList} returns this
*/
proto.immudb.schema.TxList.prototype.setTxsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.immudb.schema.Tx=} opt_value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.Tx}
 */
proto.immudb.schema.TxList.prototype.addTxs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.immudb.schema.Tx, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.TxList} returns this
 */
proto.immudb.schema.TxList.prototype.clearTxsList = function() {
  return this.setTxsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.Database.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.Database.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.Database} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Database.toObject = function(includeInstance, msg) {
  var f, obj = {
    databasename: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.Database}
 */
proto.immudb.schema.Database.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.Database;
  return proto.immudb.schema.Database.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.Database} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.Database}
 */
proto.immudb.schema.Database.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabasename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.Database.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.Database.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.Database} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Database.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabasename();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string databaseName = 1;
 * @return {string}
 */
proto.immudb.schema.Database.prototype.getDatabasename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.immudb.schema.Database} returns this
 */
proto.immudb.schema.Database.prototype.setDatabasename = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.Table.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.Table.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.Table} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Table.toObject = function(includeInstance, msg) {
  var f, obj = {
    tablename: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.Table}
 */
proto.immudb.schema.Table.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.Table;
  return proto.immudb.schema.Table.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.Table} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.Table}
 */
proto.immudb.schema.Table.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTablename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.Table.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.Table.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.Table} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Table.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTablename();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tableName = 1;
 * @return {string}
 */
proto.immudb.schema.Table.prototype.getTablename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.immudb.schema.Table} returns this
 */
proto.immudb.schema.Table.prototype.setTablename = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.SQLGetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.SQLGetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.SQLGetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.SQLGetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    table: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pkvalue: (f = msg.getPkvalue()) && proto.immudb.schema.SQLValue.toObject(includeInstance, f),
    attx: jspb.Message.getFieldWithDefault(msg, 3, 0),
    sincetx: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.SQLGetRequest}
 */
proto.immudb.schema.SQLGetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.SQLGetRequest;
  return proto.immudb.schema.SQLGetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.SQLGetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.SQLGetRequest}
 */
proto.immudb.schema.SQLGetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTable(value);
      break;
    case 2:
      var value = new proto.immudb.schema.SQLValue;
      reader.readMessage(value,proto.immudb.schema.SQLValue.deserializeBinaryFromReader);
      msg.setPkvalue(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAttx(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSincetx(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.SQLGetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.SQLGetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.SQLGetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.SQLGetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTable();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPkvalue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.immudb.schema.SQLValue.serializeBinaryToWriter
    );
  }
  f = message.getAttx();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getSincetx();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string table = 1;
 * @return {string}
 */
proto.immudb.schema.SQLGetRequest.prototype.getTable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.immudb.schema.SQLGetRequest} returns this
 */
proto.immudb.schema.SQLGetRequest.prototype.setTable = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SQLValue pkValue = 2;
 * @return {?proto.immudb.schema.SQLValue}
 */
proto.immudb.schema.SQLGetRequest.prototype.getPkvalue = function() {
  return /** @type{?proto.immudb.schema.SQLValue} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.SQLValue, 2));
};


/**
 * @param {?proto.immudb.schema.SQLValue|undefined} value
 * @return {!proto.immudb.schema.SQLGetRequest} returns this
*/
proto.immudb.schema.SQLGetRequest.prototype.setPkvalue = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.SQLGetRequest} returns this
 */
proto.immudb.schema.SQLGetRequest.prototype.clearPkvalue = function() {
  return this.setPkvalue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.SQLGetRequest.prototype.hasPkvalue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 atTx = 3;
 * @return {number}
 */
proto.immudb.schema.SQLGetRequest.prototype.getAttx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.SQLGetRequest} returns this
 */
proto.immudb.schema.SQLGetRequest.prototype.setAttx = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 sinceTx = 4;
 * @return {number}
 */
proto.immudb.schema.SQLGetRequest.prototype.getSincetx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.SQLGetRequest} returns this
 */
proto.immudb.schema.SQLGetRequest.prototype.setSincetx = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.VerifiableSQLGetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.VerifiableSQLGetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.VerifiableSQLGetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.VerifiableSQLGetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sqlgetrequest: (f = msg.getSqlgetrequest()) && proto.immudb.schema.SQLGetRequest.toObject(includeInstance, f),
    provesincetx: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.VerifiableSQLGetRequest}
 */
proto.immudb.schema.VerifiableSQLGetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.VerifiableSQLGetRequest;
  return proto.immudb.schema.VerifiableSQLGetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.VerifiableSQLGetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.VerifiableSQLGetRequest}
 */
proto.immudb.schema.VerifiableSQLGetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.immudb.schema.SQLGetRequest;
      reader.readMessage(value,proto.immudb.schema.SQLGetRequest.deserializeBinaryFromReader);
      msg.setSqlgetrequest(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProvesincetx(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.VerifiableSQLGetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.VerifiableSQLGetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.VerifiableSQLGetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.VerifiableSQLGetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSqlgetrequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.immudb.schema.SQLGetRequest.serializeBinaryToWriter
    );
  }
  f = message.getProvesincetx();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional SQLGetRequest sqlGetRequest = 1;
 * @return {?proto.immudb.schema.SQLGetRequest}
 */
proto.immudb.schema.VerifiableSQLGetRequest.prototype.getSqlgetrequest = function() {
  return /** @type{?proto.immudb.schema.SQLGetRequest} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.SQLGetRequest, 1));
};


/**
 * @param {?proto.immudb.schema.SQLGetRequest|undefined} value
 * @return {!proto.immudb.schema.VerifiableSQLGetRequest} returns this
*/
proto.immudb.schema.VerifiableSQLGetRequest.prototype.setSqlgetrequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.VerifiableSQLGetRequest} returns this
 */
proto.immudb.schema.VerifiableSQLGetRequest.prototype.clearSqlgetrequest = function() {
  return this.setSqlgetrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.VerifiableSQLGetRequest.prototype.hasSqlgetrequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 proveSinceTx = 2;
 * @return {number}
 */
proto.immudb.schema.VerifiableSQLGetRequest.prototype.getProvesincetx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.VerifiableSQLGetRequest} returns this
 */
proto.immudb.schema.VerifiableSQLGetRequest.prototype.setProvesincetx = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.SQLEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.SQLEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.SQLEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.SQLEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    tx: jspb.Message.getFieldWithDefault(msg, 1, 0),
    key: msg.getKey_asB64(),
    value: msg.getValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.SQLEntry}
 */
proto.immudb.schema.SQLEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.SQLEntry;
  return proto.immudb.schema.SQLEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.SQLEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.SQLEntry}
 */
proto.immudb.schema.SQLEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTx(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.SQLEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.SQLEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.SQLEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.SQLEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTx();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional uint64 tx = 1;
 * @return {number}
 */
proto.immudb.schema.SQLEntry.prototype.getTx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.SQLEntry} returns this
 */
proto.immudb.schema.SQLEntry.prototype.setTx = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.SQLEntry.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes key = 2;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.immudb.schema.SQLEntry.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.SQLEntry.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.SQLEntry} returns this
 */
proto.immudb.schema.SQLEntry.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes value = 3;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.SQLEntry.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes value = 3;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.immudb.schema.SQLEntry.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.SQLEntry.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.SQLEntry} returns this
 */
proto.immudb.schema.SQLEntry.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.VerifiableSQLEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.VerifiableSQLEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.VerifiableSQLEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    sqlentry: (f = msg.getSqlentry()) && proto.immudb.schema.SQLEntry.toObject(includeInstance, f),
    verifiabletx: (f = msg.getVerifiabletx()) && proto.immudb.schema.VerifiableTx.toObject(includeInstance, f),
    inclusionproof: (f = msg.getInclusionproof()) && proto.immudb.schema.InclusionProof.toObject(includeInstance, f),
    databaseid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    tableid: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pkname: jspb.Message.getFieldWithDefault(msg, 6, ""),
    colidsbyidMap: (f = msg.getColidsbyidMap()) ? f.toObject(includeInstance, undefined) : [],
    colidsbynameMap: (f = msg.getColidsbynameMap()) ? f.toObject(includeInstance, undefined) : [],
    coltypesbyidMap: (f = msg.getColtypesbyidMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.VerifiableSQLEntry}
 */
proto.immudb.schema.VerifiableSQLEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.VerifiableSQLEntry;
  return proto.immudb.schema.VerifiableSQLEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.VerifiableSQLEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.VerifiableSQLEntry}
 */
proto.immudb.schema.VerifiableSQLEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.immudb.schema.SQLEntry;
      reader.readMessage(value,proto.immudb.schema.SQLEntry.deserializeBinaryFromReader);
      msg.setSqlentry(value);
      break;
    case 2:
      var value = new proto.immudb.schema.VerifiableTx;
      reader.readMessage(value,proto.immudb.schema.VerifiableTx.deserializeBinaryFromReader);
      msg.setVerifiabletx(value);
      break;
    case 3:
      var value = new proto.immudb.schema.InclusionProof;
      reader.readMessage(value,proto.immudb.schema.InclusionProof.deserializeBinaryFromReader);
      msg.setInclusionproof(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDatabaseid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTableid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPkname(value);
      break;
    case 8:
      var value = msg.getColidsbyidMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readString, null, 0, "");
         });
      break;
    case 9:
      var value = msg.getColidsbynameMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readUint64, null, "", 0);
         });
      break;
    case 10:
      var value = msg.getColtypesbyidMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readString, null, 0, "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.VerifiableSQLEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.VerifiableSQLEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.VerifiableSQLEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSqlentry();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.immudb.schema.SQLEntry.serializeBinaryToWriter
    );
  }
  f = message.getVerifiabletx();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.immudb.schema.VerifiableTx.serializeBinaryToWriter
    );
  }
  f = message.getInclusionproof();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.immudb.schema.InclusionProof.serializeBinaryToWriter
    );
  }
  f = message.getDatabaseid();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getTableid();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getPkname();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getColidsbyidMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getColidsbynameMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(9, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeUint64);
  }
  f = message.getColtypesbyidMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional SQLEntry sqlEntry = 1;
 * @return {?proto.immudb.schema.SQLEntry}
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.getSqlentry = function() {
  return /** @type{?proto.immudb.schema.SQLEntry} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.SQLEntry, 1));
};


/**
 * @param {?proto.immudb.schema.SQLEntry|undefined} value
 * @return {!proto.immudb.schema.VerifiableSQLEntry} returns this
*/
proto.immudb.schema.VerifiableSQLEntry.prototype.setSqlentry = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.VerifiableSQLEntry} returns this
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.clearSqlentry = function() {
  return this.setSqlentry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.hasSqlentry = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VerifiableTx verifiableTx = 2;
 * @return {?proto.immudb.schema.VerifiableTx}
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.getVerifiabletx = function() {
  return /** @type{?proto.immudb.schema.VerifiableTx} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.VerifiableTx, 2));
};


/**
 * @param {?proto.immudb.schema.VerifiableTx|undefined} value
 * @return {!proto.immudb.schema.VerifiableSQLEntry} returns this
*/
proto.immudb.schema.VerifiableSQLEntry.prototype.setVerifiabletx = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.VerifiableSQLEntry} returns this
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.clearVerifiabletx = function() {
  return this.setVerifiabletx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.hasVerifiabletx = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional InclusionProof inclusionProof = 3;
 * @return {?proto.immudb.schema.InclusionProof}
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.getInclusionproof = function() {
  return /** @type{?proto.immudb.schema.InclusionProof} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.InclusionProof, 3));
};


/**
 * @param {?proto.immudb.schema.InclusionProof|undefined} value
 * @return {!proto.immudb.schema.VerifiableSQLEntry} returns this
*/
proto.immudb.schema.VerifiableSQLEntry.prototype.setInclusionproof = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.VerifiableSQLEntry} returns this
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.clearInclusionproof = function() {
  return this.setInclusionproof(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.hasInclusionproof = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 DatabaseId = 4;
 * @return {number}
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.getDatabaseid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.VerifiableSQLEntry} returns this
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.setDatabaseid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 TableId = 5;
 * @return {number}
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.getTableid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.VerifiableSQLEntry} returns this
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.setTableid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string PKName = 6;
 * @return {string}
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.getPkname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.immudb.schema.VerifiableSQLEntry} returns this
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.setPkname = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * map<uint64, string> ColIdsById = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,string>}
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.getColidsbyidMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,string>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.immudb.schema.VerifiableSQLEntry} returns this
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.clearColidsbyidMap = function() {
  this.getColidsbyidMap().clear();
  return this;};


/**
 * map<string, uint64> ColIdsByName = 9;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.getColidsbynameMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 9, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.immudb.schema.VerifiableSQLEntry} returns this
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.clearColidsbynameMap = function() {
  this.getColidsbynameMap().clear();
  return this;};


/**
 * map<uint64, string> ColTypesById = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,string>}
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.getColtypesbyidMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,string>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.immudb.schema.VerifiableSQLEntry} returns this
 */
proto.immudb.schema.VerifiableSQLEntry.prototype.clearColtypesbyidMap = function() {
  this.getColtypesbyidMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.UseDatabaseReply.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.UseDatabaseReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.UseDatabaseReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.UseDatabaseReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.UseDatabaseReply}
 */
proto.immudb.schema.UseDatabaseReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.UseDatabaseReply;
  return proto.immudb.schema.UseDatabaseReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.UseDatabaseReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.UseDatabaseReply}
 */
proto.immudb.schema.UseDatabaseReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.UseDatabaseReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.UseDatabaseReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.UseDatabaseReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.UseDatabaseReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.immudb.schema.UseDatabaseReply.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.immudb.schema.UseDatabaseReply} returns this
 */
proto.immudb.schema.UseDatabaseReply.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.ChangePermissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.ChangePermissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.ChangePermissionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.ChangePermissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 1, 0),
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    database: jspb.Message.getFieldWithDefault(msg, 3, ""),
    permission: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.ChangePermissionRequest}
 */
proto.immudb.schema.ChangePermissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.ChangePermissionRequest;
  return proto.immudb.schema.ChangePermissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.ChangePermissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.ChangePermissionRequest}
 */
proto.immudb.schema.ChangePermissionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.immudb.schema.PermissionAction} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabase(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPermission(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.ChangePermissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.ChangePermissionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.ChangePermissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.ChangePermissionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDatabase();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPermission();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional PermissionAction action = 1;
 * @return {!proto.immudb.schema.PermissionAction}
 */
proto.immudb.schema.ChangePermissionRequest.prototype.getAction = function() {
  return /** @type {!proto.immudb.schema.PermissionAction} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.immudb.schema.PermissionAction} value
 * @return {!proto.immudb.schema.ChangePermissionRequest} returns this
 */
proto.immudb.schema.ChangePermissionRequest.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.immudb.schema.ChangePermissionRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.immudb.schema.ChangePermissionRequest} returns this
 */
proto.immudb.schema.ChangePermissionRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string database = 3;
 * @return {string}
 */
proto.immudb.schema.ChangePermissionRequest.prototype.getDatabase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.immudb.schema.ChangePermissionRequest} returns this
 */
proto.immudb.schema.ChangePermissionRequest.prototype.setDatabase = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 permission = 4;
 * @return {number}
 */
proto.immudb.schema.ChangePermissionRequest.prototype.getPermission = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.ChangePermissionRequest} returns this
 */
proto.immudb.schema.ChangePermissionRequest.prototype.setPermission = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.SetActiveUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.SetActiveUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.SetActiveUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.SetActiveUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    active: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    username: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.SetActiveUserRequest}
 */
proto.immudb.schema.SetActiveUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.SetActiveUserRequest;
  return proto.immudb.schema.SetActiveUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.SetActiveUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.SetActiveUserRequest}
 */
proto.immudb.schema.SetActiveUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.SetActiveUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.SetActiveUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.SetActiveUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.SetActiveUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActive();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool active = 1;
 * @return {boolean}
 */
proto.immudb.schema.SetActiveUserRequest.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.immudb.schema.SetActiveUserRequest} returns this
 */
proto.immudb.schema.SetActiveUserRequest.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.immudb.schema.SetActiveUserRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.immudb.schema.SetActiveUserRequest} returns this
 */
proto.immudb.schema.SetActiveUserRequest.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.immudb.schema.DatabaseListResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.DatabaseListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.DatabaseListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.DatabaseListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.DatabaseListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    databasesList: jspb.Message.toObjectList(msg.getDatabasesList(),
    proto.immudb.schema.Database.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.DatabaseListResponse}
 */
proto.immudb.schema.DatabaseListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.DatabaseListResponse;
  return proto.immudb.schema.DatabaseListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.DatabaseListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.DatabaseListResponse}
 */
proto.immudb.schema.DatabaseListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.immudb.schema.Database;
      reader.readMessage(value,proto.immudb.schema.Database.deserializeBinaryFromReader);
      msg.addDatabases(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.DatabaseListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.DatabaseListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.DatabaseListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.DatabaseListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatabasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.immudb.schema.Database.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Database databases = 1;
 * @return {!Array<!proto.immudb.schema.Database>}
 */
proto.immudb.schema.DatabaseListResponse.prototype.getDatabasesList = function() {
  return /** @type{!Array<!proto.immudb.schema.Database>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.immudb.schema.Database, 1));
};


/**
 * @param {!Array<!proto.immudb.schema.Database>} value
 * @return {!proto.immudb.schema.DatabaseListResponse} returns this
*/
proto.immudb.schema.DatabaseListResponse.prototype.setDatabasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.immudb.schema.Database=} opt_value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.Database}
 */
proto.immudb.schema.DatabaseListResponse.prototype.addDatabases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.immudb.schema.Database, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.DatabaseListResponse} returns this
 */
proto.immudb.schema.DatabaseListResponse.prototype.clearDatabasesList = function() {
  return this.setDatabasesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.Chunk.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.Chunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.Chunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Chunk.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: msg.getContent_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.Chunk}
 */
proto.immudb.schema.Chunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.Chunk;
  return proto.immudb.schema.Chunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.Chunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.Chunk}
 */
proto.immudb.schema.Chunk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.Chunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.Chunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.Chunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Chunk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes content = 1;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.Chunk.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes content = 1;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.immudb.schema.Chunk.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.Chunk.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.Chunk} returns this
 */
proto.immudb.schema.Chunk.prototype.setContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.UseSnapshotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.UseSnapshotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.UseSnapshotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.UseSnapshotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sincetx: jspb.Message.getFieldWithDefault(msg, 1, 0),
    asbeforetx: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.UseSnapshotRequest}
 */
proto.immudb.schema.UseSnapshotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.UseSnapshotRequest;
  return proto.immudb.schema.UseSnapshotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.UseSnapshotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.UseSnapshotRequest}
 */
proto.immudb.schema.UseSnapshotRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSincetx(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAsbeforetx(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.UseSnapshotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.UseSnapshotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.UseSnapshotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.UseSnapshotRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSincetx();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getAsbeforetx();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 sinceTx = 1;
 * @return {number}
 */
proto.immudb.schema.UseSnapshotRequest.prototype.getSincetx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.UseSnapshotRequest} returns this
 */
proto.immudb.schema.UseSnapshotRequest.prototype.setSincetx = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 asBeforeTx = 2;
 * @return {number}
 */
proto.immudb.schema.UseSnapshotRequest.prototype.getAsbeforetx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.UseSnapshotRequest} returns this
 */
proto.immudb.schema.UseSnapshotRequest.prototype.setAsbeforetx = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.immudb.schema.SQLExecRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.SQLExecRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.SQLExecRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.SQLExecRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.SQLExecRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sql: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paramsList: jspb.Message.toObjectList(msg.getParamsList(),
    proto.immudb.schema.NamedParam.toObject, includeInstance),
    nowait: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.SQLExecRequest}
 */
proto.immudb.schema.SQLExecRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.SQLExecRequest;
  return proto.immudb.schema.SQLExecRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.SQLExecRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.SQLExecRequest}
 */
proto.immudb.schema.SQLExecRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSql(value);
      break;
    case 2:
      var value = new proto.immudb.schema.NamedParam;
      reader.readMessage(value,proto.immudb.schema.NamedParam.deserializeBinaryFromReader);
      msg.addParams(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNowait(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.SQLExecRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.SQLExecRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.SQLExecRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.SQLExecRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSql();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.immudb.schema.NamedParam.serializeBinaryToWriter
    );
  }
  f = message.getNowait();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string sql = 1;
 * @return {string}
 */
proto.immudb.schema.SQLExecRequest.prototype.getSql = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.immudb.schema.SQLExecRequest} returns this
 */
proto.immudb.schema.SQLExecRequest.prototype.setSql = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated NamedParam params = 2;
 * @return {!Array<!proto.immudb.schema.NamedParam>}
 */
proto.immudb.schema.SQLExecRequest.prototype.getParamsList = function() {
  return /** @type{!Array<!proto.immudb.schema.NamedParam>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.immudb.schema.NamedParam, 2));
};


/**
 * @param {!Array<!proto.immudb.schema.NamedParam>} value
 * @return {!proto.immudb.schema.SQLExecRequest} returns this
*/
proto.immudb.schema.SQLExecRequest.prototype.setParamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.immudb.schema.NamedParam=} opt_value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.NamedParam}
 */
proto.immudb.schema.SQLExecRequest.prototype.addParams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.immudb.schema.NamedParam, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.SQLExecRequest} returns this
 */
proto.immudb.schema.SQLExecRequest.prototype.clearParamsList = function() {
  return this.setParamsList([]);
};


/**
 * optional bool noWait = 3;
 * @return {boolean}
 */
proto.immudb.schema.SQLExecRequest.prototype.getNowait = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.immudb.schema.SQLExecRequest} returns this
 */
proto.immudb.schema.SQLExecRequest.prototype.setNowait = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.immudb.schema.SQLQueryRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.SQLQueryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.SQLQueryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.SQLQueryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.SQLQueryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sql: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paramsList: jspb.Message.toObjectList(msg.getParamsList(),
    proto.immudb.schema.NamedParam.toObject, includeInstance),
    reusesnapshot: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.SQLQueryRequest}
 */
proto.immudb.schema.SQLQueryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.SQLQueryRequest;
  return proto.immudb.schema.SQLQueryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.SQLQueryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.SQLQueryRequest}
 */
proto.immudb.schema.SQLQueryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSql(value);
      break;
    case 2:
      var value = new proto.immudb.schema.NamedParam;
      reader.readMessage(value,proto.immudb.schema.NamedParam.deserializeBinaryFromReader);
      msg.addParams(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReusesnapshot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.SQLQueryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.SQLQueryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.SQLQueryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.SQLQueryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSql();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.immudb.schema.NamedParam.serializeBinaryToWriter
    );
  }
  f = message.getReusesnapshot();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string sql = 1;
 * @return {string}
 */
proto.immudb.schema.SQLQueryRequest.prototype.getSql = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.immudb.schema.SQLQueryRequest} returns this
 */
proto.immudb.schema.SQLQueryRequest.prototype.setSql = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated NamedParam params = 2;
 * @return {!Array<!proto.immudb.schema.NamedParam>}
 */
proto.immudb.schema.SQLQueryRequest.prototype.getParamsList = function() {
  return /** @type{!Array<!proto.immudb.schema.NamedParam>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.immudb.schema.NamedParam, 2));
};


/**
 * @param {!Array<!proto.immudb.schema.NamedParam>} value
 * @return {!proto.immudb.schema.SQLQueryRequest} returns this
*/
proto.immudb.schema.SQLQueryRequest.prototype.setParamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.immudb.schema.NamedParam=} opt_value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.NamedParam}
 */
proto.immudb.schema.SQLQueryRequest.prototype.addParams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.immudb.schema.NamedParam, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.SQLQueryRequest} returns this
 */
proto.immudb.schema.SQLQueryRequest.prototype.clearParamsList = function() {
  return this.setParamsList([]);
};


/**
 * optional bool reuseSnapshot = 3;
 * @return {boolean}
 */
proto.immudb.schema.SQLQueryRequest.prototype.getReusesnapshot = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.immudb.schema.SQLQueryRequest} returns this
 */
proto.immudb.schema.SQLQueryRequest.prototype.setReusesnapshot = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.NamedParam.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.NamedParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.NamedParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.NamedParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: (f = msg.getValue()) && proto.immudb.schema.SQLValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.NamedParam}
 */
proto.immudb.schema.NamedParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.NamedParam;
  return proto.immudb.schema.NamedParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.NamedParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.NamedParam}
 */
proto.immudb.schema.NamedParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.immudb.schema.SQLValue;
      reader.readMessage(value,proto.immudb.schema.SQLValue.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.NamedParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.NamedParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.NamedParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.NamedParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.immudb.schema.SQLValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.immudb.schema.NamedParam.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.immudb.schema.NamedParam} returns this
 */
proto.immudb.schema.NamedParam.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SQLValue value = 2;
 * @return {?proto.immudb.schema.SQLValue}
 */
proto.immudb.schema.NamedParam.prototype.getValue = function() {
  return /** @type{?proto.immudb.schema.SQLValue} */ (
    jspb.Message.getWrapperField(this, proto.immudb.schema.SQLValue, 2));
};


/**
 * @param {?proto.immudb.schema.SQLValue|undefined} value
 * @return {!proto.immudb.schema.NamedParam} returns this
*/
proto.immudb.schema.NamedParam.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.immudb.schema.NamedParam} returns this
 */
proto.immudb.schema.NamedParam.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.NamedParam.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.immudb.schema.SQLExecResult.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.SQLExecResult.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.SQLExecResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.SQLExecResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.SQLExecResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    ctxsList: jspb.Message.toObjectList(msg.getCtxsList(),
    proto.immudb.schema.TxMetadata.toObject, includeInstance),
    dtxsList: jspb.Message.toObjectList(msg.getDtxsList(),
    proto.immudb.schema.TxMetadata.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.SQLExecResult}
 */
proto.immudb.schema.SQLExecResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.SQLExecResult;
  return proto.immudb.schema.SQLExecResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.SQLExecResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.SQLExecResult}
 */
proto.immudb.schema.SQLExecResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.immudb.schema.TxMetadata;
      reader.readMessage(value,proto.immudb.schema.TxMetadata.deserializeBinaryFromReader);
      msg.addCtxs(value);
      break;
    case 2:
      var value = new proto.immudb.schema.TxMetadata;
      reader.readMessage(value,proto.immudb.schema.TxMetadata.deserializeBinaryFromReader);
      msg.addDtxs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.SQLExecResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.SQLExecResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.SQLExecResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.SQLExecResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtxsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.immudb.schema.TxMetadata.serializeBinaryToWriter
    );
  }
  f = message.getDtxsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.immudb.schema.TxMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TxMetadata ctxs = 1;
 * @return {!Array<!proto.immudb.schema.TxMetadata>}
 */
proto.immudb.schema.SQLExecResult.prototype.getCtxsList = function() {
  return /** @type{!Array<!proto.immudb.schema.TxMetadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.immudb.schema.TxMetadata, 1));
};


/**
 * @param {!Array<!proto.immudb.schema.TxMetadata>} value
 * @return {!proto.immudb.schema.SQLExecResult} returns this
*/
proto.immudb.schema.SQLExecResult.prototype.setCtxsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.immudb.schema.TxMetadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.TxMetadata}
 */
proto.immudb.schema.SQLExecResult.prototype.addCtxs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.immudb.schema.TxMetadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.SQLExecResult} returns this
 */
proto.immudb.schema.SQLExecResult.prototype.clearCtxsList = function() {
  return this.setCtxsList([]);
};


/**
 * repeated TxMetadata dtxs = 2;
 * @return {!Array<!proto.immudb.schema.TxMetadata>}
 */
proto.immudb.schema.SQLExecResult.prototype.getDtxsList = function() {
  return /** @type{!Array<!proto.immudb.schema.TxMetadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.immudb.schema.TxMetadata, 2));
};


/**
 * @param {!Array<!proto.immudb.schema.TxMetadata>} value
 * @return {!proto.immudb.schema.SQLExecResult} returns this
*/
proto.immudb.schema.SQLExecResult.prototype.setDtxsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.immudb.schema.TxMetadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.TxMetadata}
 */
proto.immudb.schema.SQLExecResult.prototype.addDtxs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.immudb.schema.TxMetadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.SQLExecResult} returns this
 */
proto.immudb.schema.SQLExecResult.prototype.clearDtxsList = function() {
  return this.setDtxsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.immudb.schema.SQLQueryResult.repeatedFields_ = [2,1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.SQLQueryResult.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.SQLQueryResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.SQLQueryResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.SQLQueryResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    columnsList: jspb.Message.toObjectList(msg.getColumnsList(),
    proto.immudb.schema.Column.toObject, includeInstance),
    rowsList: jspb.Message.toObjectList(msg.getRowsList(),
    proto.immudb.schema.Row.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.SQLQueryResult}
 */
proto.immudb.schema.SQLQueryResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.SQLQueryResult;
  return proto.immudb.schema.SQLQueryResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.SQLQueryResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.SQLQueryResult}
 */
proto.immudb.schema.SQLQueryResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.immudb.schema.Column;
      reader.readMessage(value,proto.immudb.schema.Column.deserializeBinaryFromReader);
      msg.addColumns(value);
      break;
    case 1:
      var value = new proto.immudb.schema.Row;
      reader.readMessage(value,proto.immudb.schema.Row.deserializeBinaryFromReader);
      msg.addRows(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.SQLQueryResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.SQLQueryResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.SQLQueryResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.SQLQueryResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.immudb.schema.Column.serializeBinaryToWriter
    );
  }
  f = message.getRowsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.immudb.schema.Row.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Column columns = 2;
 * @return {!Array<!proto.immudb.schema.Column>}
 */
proto.immudb.schema.SQLQueryResult.prototype.getColumnsList = function() {
  return /** @type{!Array<!proto.immudb.schema.Column>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.immudb.schema.Column, 2));
};


/**
 * @param {!Array<!proto.immudb.schema.Column>} value
 * @return {!proto.immudb.schema.SQLQueryResult} returns this
*/
proto.immudb.schema.SQLQueryResult.prototype.setColumnsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.immudb.schema.Column=} opt_value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.Column}
 */
proto.immudb.schema.SQLQueryResult.prototype.addColumns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.immudb.schema.Column, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.SQLQueryResult} returns this
 */
proto.immudb.schema.SQLQueryResult.prototype.clearColumnsList = function() {
  return this.setColumnsList([]);
};


/**
 * repeated Row rows = 1;
 * @return {!Array<!proto.immudb.schema.Row>}
 */
proto.immudb.schema.SQLQueryResult.prototype.getRowsList = function() {
  return /** @type{!Array<!proto.immudb.schema.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.immudb.schema.Row, 1));
};


/**
 * @param {!Array<!proto.immudb.schema.Row>} value
 * @return {!proto.immudb.schema.SQLQueryResult} returns this
*/
proto.immudb.schema.SQLQueryResult.prototype.setRowsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.immudb.schema.Row=} opt_value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.Row}
 */
proto.immudb.schema.SQLQueryResult.prototype.addRows = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.immudb.schema.Row, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.SQLQueryResult} returns this
 */
proto.immudb.schema.SQLQueryResult.prototype.clearRowsList = function() {
  return this.setRowsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.Column.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.Column.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.Column} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Column.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.Column}
 */
proto.immudb.schema.Column.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.Column;
  return proto.immudb.schema.Column.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.Column} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.Column}
 */
proto.immudb.schema.Column.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.Column.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.Column.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.Column} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Column.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.immudb.schema.Column.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.immudb.schema.Column} returns this
 */
proto.immudb.schema.Column.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.immudb.schema.Column.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.immudb.schema.Column} returns this
 */
proto.immudb.schema.Column.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.immudb.schema.Row.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.Row} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Row.toObject = function(includeInstance, msg) {
  var f, obj = {
    columnsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.immudb.schema.SQLValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.Row}
 */
proto.immudb.schema.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.Row;
  return proto.immudb.schema.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.Row}
 */
proto.immudb.schema.Row.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumns(value);
      break;
    case 2:
      var value = new proto.immudb.schema.SQLValue;
      reader.readMessage(value,proto.immudb.schema.SQLValue.deserializeBinaryFromReader);
      msg.addValues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.Row.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.Row} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.Row.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.immudb.schema.SQLValue.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string columns = 1;
 * @return {!Array<string>}
 */
proto.immudb.schema.Row.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.immudb.schema.Row} returns this
 */
proto.immudb.schema.Row.prototype.setColumnsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.Row} returns this
 */
proto.immudb.schema.Row.prototype.addColumns = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.Row} returns this
 */
proto.immudb.schema.Row.prototype.clearColumnsList = function() {
  return this.setColumnsList([]);
};


/**
 * repeated SQLValue values = 2;
 * @return {!Array<!proto.immudb.schema.SQLValue>}
 */
proto.immudb.schema.Row.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.immudb.schema.SQLValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.immudb.schema.SQLValue, 2));
};


/**
 * @param {!Array<!proto.immudb.schema.SQLValue>} value
 * @return {!proto.immudb.schema.Row} returns this
*/
proto.immudb.schema.Row.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.immudb.schema.SQLValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.immudb.schema.SQLValue}
 */
proto.immudb.schema.Row.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.immudb.schema.SQLValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.immudb.schema.Row} returns this
 */
proto.immudb.schema.Row.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.immudb.schema.SQLValue.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.immudb.schema.SQLValue.ValueCase = {
  VALUE_NOT_SET: 0,
  NULL: 1,
  N: 2,
  S: 3,
  B: 4,
  BS: 5
};

/**
 * @return {proto.immudb.schema.SQLValue.ValueCase}
 */
proto.immudb.schema.SQLValue.prototype.getValueCase = function() {
  return /** @type {proto.immudb.schema.SQLValue.ValueCase} */(jspb.Message.computeOneofCase(this, proto.immudb.schema.SQLValue.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.immudb.schema.SQLValue.prototype.toObject = function(opt_includeInstance) {
  return proto.immudb.schema.SQLValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.immudb.schema.SQLValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.SQLValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_null: jspb.Message.getFieldWithDefault(msg, 1, 0),
    n: jspb.Message.getFieldWithDefault(msg, 2, 0),
    s: jspb.Message.getFieldWithDefault(msg, 3, ""),
    b: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    bs: msg.getBs_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.immudb.schema.SQLValue}
 */
proto.immudb.schema.SQLValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.immudb.schema.SQLValue;
  return proto.immudb.schema.SQLValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.immudb.schema.SQLValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.immudb.schema.SQLValue}
 */
proto.immudb.schema.SQLValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.protobuf.NullValue} */ (reader.readEnum());
      msg.setNull(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setN(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setS(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setB(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.immudb.schema.SQLValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.immudb.schema.SQLValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.immudb.schema.SQLValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.immudb.schema.SQLValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.google.protobuf.NullValue} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional google.protobuf.NullValue null = 1;
 * @return {!proto.google.protobuf.NullValue}
 */
proto.immudb.schema.SQLValue.prototype.getNull = function() {
  return /** @type {!proto.google.protobuf.NullValue} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.protobuf.NullValue} value
 * @return {!proto.immudb.schema.SQLValue} returns this
 */
proto.immudb.schema.SQLValue.prototype.setNull = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.immudb.schema.SQLValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.immudb.schema.SQLValue} returns this
 */
proto.immudb.schema.SQLValue.prototype.clearNull = function() {
  return jspb.Message.setOneofField(this, 1, proto.immudb.schema.SQLValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.SQLValue.prototype.hasNull = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 n = 2;
 * @return {number}
 */
proto.immudb.schema.SQLValue.prototype.getN = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.immudb.schema.SQLValue} returns this
 */
proto.immudb.schema.SQLValue.prototype.setN = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.immudb.schema.SQLValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.immudb.schema.SQLValue} returns this
 */
proto.immudb.schema.SQLValue.prototype.clearN = function() {
  return jspb.Message.setOneofField(this, 2, proto.immudb.schema.SQLValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.SQLValue.prototype.hasN = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string s = 3;
 * @return {string}
 */
proto.immudb.schema.SQLValue.prototype.getS = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.immudb.schema.SQLValue} returns this
 */
proto.immudb.schema.SQLValue.prototype.setS = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.immudb.schema.SQLValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.immudb.schema.SQLValue} returns this
 */
proto.immudb.schema.SQLValue.prototype.clearS = function() {
  return jspb.Message.setOneofField(this, 3, proto.immudb.schema.SQLValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.SQLValue.prototype.hasS = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool b = 4;
 * @return {boolean}
 */
proto.immudb.schema.SQLValue.prototype.getB = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.immudb.schema.SQLValue} returns this
 */
proto.immudb.schema.SQLValue.prototype.setB = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.immudb.schema.SQLValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.immudb.schema.SQLValue} returns this
 */
proto.immudb.schema.SQLValue.prototype.clearB = function() {
  return jspb.Message.setOneofField(this, 4, proto.immudb.schema.SQLValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.SQLValue.prototype.hasB = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bytes bs = 5;
 * @return {!(string|Uint8Array)}
 */
proto.immudb.schema.SQLValue.prototype.getBs = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes bs = 5;
 * This is a type-conversion wrapper around `getBs()`
 * @return {string}
 */
proto.immudb.schema.SQLValue.prototype.getBs_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBs()));
};


/**
 * optional bytes bs = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBs()`
 * @return {!Uint8Array}
 */
proto.immudb.schema.SQLValue.prototype.getBs_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBs()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.immudb.schema.SQLValue} returns this
 */
proto.immudb.schema.SQLValue.prototype.setBs = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.immudb.schema.SQLValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.immudb.schema.SQLValue} returns this
 */
proto.immudb.schema.SQLValue.prototype.clearBs = function() {
  return jspb.Message.setOneofField(this, 5, proto.immudb.schema.SQLValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.immudb.schema.SQLValue.prototype.hasBs = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * @enum {number}
 */
proto.immudb.schema.PermissionAction = {
  GRANT: 0,
  REVOKE: 1
};

goog.object.extend(exports, proto.immudb.schema);
