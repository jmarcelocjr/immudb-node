import * as schemaTypes from '../src/proto/schema_pb';
import { USER_PERMISSION, } from './user'
import * as interfaces from '../src/interfaces';

export type SQLColumnDescription = {
    name: string,
    type: string,
    nullable: boolean,
    index: string,
    autoincrement: boolean,
    unique: boolean,
};

export type SQLTableDescription = {
    name: string,
};

interface IValue {
    prop: string
}
export interface SQLRowDescription {
    [name: string]: IValue;
}

export type SQLValue = null | string | number | Uint8Array | boolean
type SQLParams = { [key: string]: SQLValue }
export namespace Parameters {
    export type SetReference = {
        key: string
        referencedKey: string
    }
    export type SetReferenceAt = {
        key: string
        referencedKey: string
        attx: number
    }
    export type ZAdd = {
        set: string
        score: number
        key: string
    }
    export type ZAddAt = {
        set: string
        score: number
        key: string
        attx: number
    }
    export type Get = {
        key: string
    }
    export type Set = {
        key: string
        value: string
    }
    export type Login = {
        user: string
        password: string
    }
    export type CreateUser = {
        user: string
        password: string
        database: string
        permission: number
    }
    export type ChangePassword = {
        user: string
        oldpassword: string
        newpassword: string
    }
    export type Count = {
        prefix: string
    }
    export type History = {
        key: string
        offset?: number
        limit?: number
        desc?: boolean
        sincetx?: number
    }
    export type ZScan = {
        set: string,
        seekkey?: string,
        seekscore?: number,
        seekattx?: number,
        inclusiveseek?: boolean,
        desc?: boolean,
        sincetx?: number,
        nowait?: boolean,
        minscore?: schemaTypes.Score.AsObject,
        maxscore?: schemaTypes.Score.AsObject,
        limit?: number,
    }
    export type ChangePermission = Omit<schemaTypes.ChangePermissionRequest.AsObject, 'permission'> & {
        permission: USER_PERMISSION
    }
    export type CreateDatabase = schemaTypes.Database.AsObject
    export type UseDatabase = schemaTypes.Database.AsObject
    export type SetActiveUser = schemaTypes.SetActiveUserRequest.AsObject
    export type Scan = Partial<schemaTypes.ScanRequest.AsObject>
    export type SetAll = schemaTypes.SetRequest.AsObject
    export type ExecAll = schemaTypes.ExecAllRequest.AsObject
    export type GetAll = schemaTypes.KeyListRequest.AsObject
    export type VerifiedSet = schemaTypes.KeyValue.AsObject
    export type VerifiedGet = interfaces.PartialBy<schemaTypes.KeyRequest.AsObject, 'sincetx' | 'attx'>
    export type VerifiedGetAt = Omit<schemaTypes.KeyRequest.AsObject, 'sincetx'>
    export type VerifiedGetSince = Omit<schemaTypes.KeyRequest.AsObject, 'attx'>
    export type UpdateAuthConfig = schemaTypes.AuthConfig.AsObject
    export type UpdateMTLSConfig = schemaTypes.MTLSConfig.AsObject
    export type TxById = schemaTypes.TxRequest.AsObject
    export type VerifiedTxById = schemaTypes.TxRequest.AsObject
    export type TxScan = schemaTypes.TxScanRequest.AsObject
    export type VerifiedZAdd = ZAdd
    export type VerifiedZAddAt = ZAddAt
    export type VerifiedSetReference = SetReference
    export type VerifiedSetReferenceAt = SetReferenceAt
    export type SQLExec = interfaces.PartialBy<Omit<schemaTypes.SQLExecRequest.AsObject, 'paramsList'>, 'nowait'> & {
        params?: SQLParams
    }
    export type SQLQuery = interfaces.PartialBy<Omit<schemaTypes.SQLQueryRequest.AsObject, 'paramsList'>, 'reusesnapshot'> & {
        params?: SQLParams
    }
}


export default Parameters
