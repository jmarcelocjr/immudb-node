export var ImmuServiceService: {
    listUsers: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("google-protobuf/google/protobuf/empty_pb").Empty;
        responseType: typeof import("./schema_pb.js").UserList;
        requestSerialize: typeof serialize_google_protobuf_Empty;
        requestDeserialize: typeof deserialize_google_protobuf_Empty;
        responseSerialize: typeof serialize_immudb_schema_UserList;
        responseDeserialize: typeof deserialize_immudb_schema_UserList;
    };
    createUser: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").CreateUserRequest;
        responseType: typeof import("google-protobuf/google/protobuf/empty_pb").Empty;
        requestSerialize: typeof serialize_immudb_schema_CreateUserRequest;
        requestDeserialize: typeof deserialize_immudb_schema_CreateUserRequest;
        responseSerialize: typeof serialize_google_protobuf_Empty;
        responseDeserialize: typeof deserialize_google_protobuf_Empty;
    };
    changePassword: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").ChangePasswordRequest;
        responseType: typeof import("google-protobuf/google/protobuf/empty_pb").Empty;
        requestSerialize: typeof serialize_immudb_schema_ChangePasswordRequest;
        requestDeserialize: typeof deserialize_immudb_schema_ChangePasswordRequest;
        responseSerialize: typeof serialize_google_protobuf_Empty;
        responseDeserialize: typeof deserialize_google_protobuf_Empty;
    };
    updateAuthConfig: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").AuthConfig;
        responseType: typeof import("google-protobuf/google/protobuf/empty_pb").Empty;
        requestSerialize: typeof serialize_immudb_schema_AuthConfig;
        requestDeserialize: typeof deserialize_immudb_schema_AuthConfig;
        responseSerialize: typeof serialize_google_protobuf_Empty;
        responseDeserialize: typeof deserialize_google_protobuf_Empty;
    };
    updateMTLSConfig: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").MTLSConfig;
        responseType: typeof import("google-protobuf/google/protobuf/empty_pb").Empty;
        requestSerialize: typeof serialize_immudb_schema_MTLSConfig;
        requestDeserialize: typeof deserialize_immudb_schema_MTLSConfig;
        responseSerialize: typeof serialize_google_protobuf_Empty;
        responseDeserialize: typeof deserialize_google_protobuf_Empty;
    };
    login: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").LoginRequest;
        responseType: typeof import("./schema_pb.js").LoginResponse;
        requestSerialize: typeof serialize_immudb_schema_LoginRequest;
        requestDeserialize: typeof deserialize_immudb_schema_LoginRequest;
        responseSerialize: typeof serialize_immudb_schema_LoginResponse;
        responseDeserialize: typeof deserialize_immudb_schema_LoginResponse;
    };
    logout: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("google-protobuf/google/protobuf/empty_pb").Empty;
        responseType: typeof import("google-protobuf/google/protobuf/empty_pb").Empty;
        requestSerialize: typeof serialize_google_protobuf_Empty;
        requestDeserialize: typeof deserialize_google_protobuf_Empty;
        responseSerialize: typeof serialize_google_protobuf_Empty;
        responseDeserialize: typeof deserialize_google_protobuf_Empty;
    };
    set: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").SetRequest;
        responseType: typeof import("./schema_pb.js").TxMetadata;
        requestSerialize: typeof serialize_immudb_schema_SetRequest;
        requestDeserialize: typeof deserialize_immudb_schema_SetRequest;
        responseSerialize: typeof serialize_immudb_schema_TxMetadata;
        responseDeserialize: typeof deserialize_immudb_schema_TxMetadata;
    };
    verifiableSet: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").VerifiableSetRequest;
        responseType: typeof import("./schema_pb.js").VerifiableTx;
        requestSerialize: typeof serialize_immudb_schema_VerifiableSetRequest;
        requestDeserialize: typeof deserialize_immudb_schema_VerifiableSetRequest;
        responseSerialize: typeof serialize_immudb_schema_VerifiableTx;
        responseDeserialize: typeof deserialize_immudb_schema_VerifiableTx;
    };
    get: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").KeyRequest;
        responseType: typeof import("./schema_pb.js").Entry;
        requestSerialize: typeof serialize_immudb_schema_KeyRequest;
        requestDeserialize: typeof deserialize_immudb_schema_KeyRequest;
        responseSerialize: typeof serialize_immudb_schema_Entry;
        responseDeserialize: typeof deserialize_immudb_schema_Entry;
    };
    verifiableGet: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").VerifiableGetRequest;
        responseType: typeof import("./schema_pb.js").VerifiableEntry;
        requestSerialize: typeof serialize_immudb_schema_VerifiableGetRequest;
        requestDeserialize: typeof deserialize_immudb_schema_VerifiableGetRequest;
        responseSerialize: typeof serialize_immudb_schema_VerifiableEntry;
        responseDeserialize: typeof deserialize_immudb_schema_VerifiableEntry;
    };
    getAll: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").KeyListRequest;
        responseType: typeof import("./schema_pb.js").Entries;
        requestSerialize: typeof serialize_immudb_schema_KeyListRequest;
        requestDeserialize: typeof deserialize_immudb_schema_KeyListRequest;
        responseSerialize: typeof serialize_immudb_schema_Entries;
        responseDeserialize: typeof deserialize_immudb_schema_Entries;
    };
    execAll: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").ExecAllRequest;
        responseType: typeof import("./schema_pb.js").TxMetadata;
        requestSerialize: typeof serialize_immudb_schema_ExecAllRequest;
        requestDeserialize: typeof deserialize_immudb_schema_ExecAllRequest;
        responseSerialize: typeof serialize_immudb_schema_TxMetadata;
        responseDeserialize: typeof deserialize_immudb_schema_TxMetadata;
    };
    scan: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").ScanRequest;
        responseType: typeof import("./schema_pb.js").Entries;
        requestSerialize: typeof serialize_immudb_schema_ScanRequest;
        requestDeserialize: typeof deserialize_immudb_schema_ScanRequest;
        responseSerialize: typeof serialize_immudb_schema_Entries;
        responseDeserialize: typeof deserialize_immudb_schema_Entries;
    };
    count: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").KeyPrefix;
        responseType: typeof import("./schema_pb.js").EntryCount;
        requestSerialize: typeof serialize_immudb_schema_KeyPrefix;
        requestDeserialize: typeof deserialize_immudb_schema_KeyPrefix;
        responseSerialize: typeof serialize_immudb_schema_EntryCount;
        responseDeserialize: typeof deserialize_immudb_schema_EntryCount;
    };
    countAll: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("google-protobuf/google/protobuf/empty_pb").Empty;
        responseType: typeof import("./schema_pb.js").EntryCount;
        requestSerialize: typeof serialize_google_protobuf_Empty;
        requestDeserialize: typeof deserialize_google_protobuf_Empty;
        responseSerialize: typeof serialize_immudb_schema_EntryCount;
        responseDeserialize: typeof deserialize_immudb_schema_EntryCount;
    };
    txById: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").TxRequest;
        responseType: typeof import("./schema_pb.js").Tx;
        requestSerialize: typeof serialize_immudb_schema_TxRequest;
        requestDeserialize: typeof deserialize_immudb_schema_TxRequest;
        responseSerialize: typeof serialize_immudb_schema_Tx;
        responseDeserialize: typeof deserialize_immudb_schema_Tx;
    };
    verifiableTxById: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").VerifiableTxRequest;
        responseType: typeof import("./schema_pb.js").VerifiableTx;
        requestSerialize: typeof serialize_immudb_schema_VerifiableTxRequest;
        requestDeserialize: typeof deserialize_immudb_schema_VerifiableTxRequest;
        responseSerialize: typeof serialize_immudb_schema_VerifiableTx;
        responseDeserialize: typeof deserialize_immudb_schema_VerifiableTx;
    };
    txScan: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").TxScanRequest;
        responseType: typeof import("./schema_pb.js").TxList;
        requestSerialize: typeof serialize_immudb_schema_TxScanRequest;
        requestDeserialize: typeof deserialize_immudb_schema_TxScanRequest;
        responseSerialize: typeof serialize_immudb_schema_TxList;
        responseDeserialize: typeof deserialize_immudb_schema_TxList;
    };
    history: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").HistoryRequest;
        responseType: typeof import("./schema_pb.js").Entries;
        requestSerialize: typeof serialize_immudb_schema_HistoryRequest;
        requestDeserialize: typeof deserialize_immudb_schema_HistoryRequest;
        responseSerialize: typeof serialize_immudb_schema_Entries;
        responseDeserialize: typeof deserialize_immudb_schema_Entries;
    };
    health: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("google-protobuf/google/protobuf/empty_pb").Empty;
        responseType: typeof import("./schema_pb.js").HealthResponse;
        requestSerialize: typeof serialize_google_protobuf_Empty;
        requestDeserialize: typeof deserialize_google_protobuf_Empty;
        responseSerialize: typeof serialize_immudb_schema_HealthResponse;
        responseDeserialize: typeof deserialize_immudb_schema_HealthResponse;
    };
    currentState: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("google-protobuf/google/protobuf/empty_pb").Empty;
        responseType: typeof import("./schema_pb.js").ImmutableState;
        requestSerialize: typeof serialize_google_protobuf_Empty;
        requestDeserialize: typeof deserialize_google_protobuf_Empty;
        responseSerialize: typeof serialize_immudb_schema_ImmutableState;
        responseDeserialize: typeof deserialize_immudb_schema_ImmutableState;
    };
    setReference: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").ReferenceRequest;
        responseType: typeof import("./schema_pb.js").TxMetadata;
        requestSerialize: typeof serialize_immudb_schema_ReferenceRequest;
        requestDeserialize: typeof deserialize_immudb_schema_ReferenceRequest;
        responseSerialize: typeof serialize_immudb_schema_TxMetadata;
        responseDeserialize: typeof deserialize_immudb_schema_TxMetadata;
    };
    verifiableSetReference: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").VerifiableReferenceRequest;
        responseType: typeof import("./schema_pb.js").VerifiableTx;
        requestSerialize: typeof serialize_immudb_schema_VerifiableReferenceRequest;
        requestDeserialize: typeof deserialize_immudb_schema_VerifiableReferenceRequest;
        responseSerialize: typeof serialize_immudb_schema_VerifiableTx;
        responseDeserialize: typeof deserialize_immudb_schema_VerifiableTx;
    };
    zAdd: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").ZAddRequest;
        responseType: typeof import("./schema_pb.js").TxMetadata;
        requestSerialize: typeof serialize_immudb_schema_ZAddRequest;
        requestDeserialize: typeof deserialize_immudb_schema_ZAddRequest;
        responseSerialize: typeof serialize_immudb_schema_TxMetadata;
        responseDeserialize: typeof deserialize_immudb_schema_TxMetadata;
    };
    verifiableZAdd: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").VerifiableZAddRequest;
        responseType: typeof import("./schema_pb.js").VerifiableTx;
        requestSerialize: typeof serialize_immudb_schema_VerifiableZAddRequest;
        requestDeserialize: typeof deserialize_immudb_schema_VerifiableZAddRequest;
        responseSerialize: typeof serialize_immudb_schema_VerifiableTx;
        responseDeserialize: typeof deserialize_immudb_schema_VerifiableTx;
    };
    zScan: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").ZScanRequest;
        responseType: typeof import("./schema_pb.js").ZEntries;
        requestSerialize: typeof serialize_immudb_schema_ZScanRequest;
        requestDeserialize: typeof deserialize_immudb_schema_ZScanRequest;
        responseSerialize: typeof serialize_immudb_schema_ZEntries;
        responseDeserialize: typeof deserialize_immudb_schema_ZEntries;
    };
    createDatabase: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").Database;
        responseType: typeof import("google-protobuf/google/protobuf/empty_pb").Empty;
        requestSerialize: typeof serialize_immudb_schema_Database;
        requestDeserialize: typeof deserialize_immudb_schema_Database;
        responseSerialize: typeof serialize_google_protobuf_Empty;
        responseDeserialize: typeof deserialize_google_protobuf_Empty;
    };
    databaseList: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("google-protobuf/google/protobuf/empty_pb").Empty;
        responseType: typeof import("./schema_pb.js").DatabaseListResponse;
        requestSerialize: typeof serialize_google_protobuf_Empty;
        requestDeserialize: typeof deserialize_google_protobuf_Empty;
        responseSerialize: typeof serialize_immudb_schema_DatabaseListResponse;
        responseDeserialize: typeof deserialize_immudb_schema_DatabaseListResponse;
    };
    useDatabase: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").Database;
        responseType: typeof import("./schema_pb.js").UseDatabaseReply;
        requestSerialize: typeof serialize_immudb_schema_Database;
        requestDeserialize: typeof deserialize_immudb_schema_Database;
        responseSerialize: typeof serialize_immudb_schema_UseDatabaseReply;
        responseDeserialize: typeof deserialize_immudb_schema_UseDatabaseReply;
    };
    cleanIndex: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("google-protobuf/google/protobuf/empty_pb").Empty;
        responseType: typeof import("google-protobuf/google/protobuf/empty_pb").Empty;
        requestSerialize: typeof serialize_google_protobuf_Empty;
        requestDeserialize: typeof deserialize_google_protobuf_Empty;
        responseSerialize: typeof serialize_google_protobuf_Empty;
        responseDeserialize: typeof deserialize_google_protobuf_Empty;
    };
    changePermission: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").ChangePermissionRequest;
        responseType: typeof import("google-protobuf/google/protobuf/empty_pb").Empty;
        requestSerialize: typeof serialize_immudb_schema_ChangePermissionRequest;
        requestDeserialize: typeof deserialize_immudb_schema_ChangePermissionRequest;
        responseSerialize: typeof serialize_google_protobuf_Empty;
        responseDeserialize: typeof deserialize_google_protobuf_Empty;
    };
    setActiveUser: {
        path: string;
        requestStream: boolean;
        responseStream: boolean;
        requestType: typeof import("./schema_pb.js").SetActiveUserRequest;
        responseType: typeof import("google-protobuf/google/protobuf/empty_pb").Empty;
        requestSerialize: typeof serialize_immudb_schema_SetActiveUserRequest;
        requestDeserialize: typeof deserialize_immudb_schema_SetActiveUserRequest;
        responseSerialize: typeof serialize_google_protobuf_Empty;
        responseDeserialize: typeof deserialize_google_protobuf_Empty;
    };
};
export var ImmuServiceClient: import("@grpc/grpc-js/build/src/make-client").ServiceClientConstructor;
declare function serialize_google_protobuf_Empty(arg: any): Buffer;
declare function deserialize_google_protobuf_Empty(buffer_arg: any): import("google-protobuf/google/protobuf/empty_pb").Empty;
declare function serialize_immudb_schema_UserList(arg: any): Buffer;
declare function deserialize_immudb_schema_UserList(buffer_arg: any): import("./schema_pb.js").UserList;
declare function serialize_immudb_schema_CreateUserRequest(arg: any): Buffer;
declare function deserialize_immudb_schema_CreateUserRequest(buffer_arg: any): import("./schema_pb.js").CreateUserRequest;
declare function serialize_immudb_schema_ChangePasswordRequest(arg: any): Buffer;
declare function deserialize_immudb_schema_ChangePasswordRequest(buffer_arg: any): import("./schema_pb.js").ChangePasswordRequest;
declare function serialize_immudb_schema_AuthConfig(arg: any): Buffer;
declare function deserialize_immudb_schema_AuthConfig(buffer_arg: any): import("./schema_pb.js").AuthConfig;
declare function serialize_immudb_schema_MTLSConfig(arg: any): Buffer;
declare function deserialize_immudb_schema_MTLSConfig(buffer_arg: any): import("./schema_pb.js").MTLSConfig;
declare function serialize_immudb_schema_LoginRequest(arg: any): Buffer;
declare function deserialize_immudb_schema_LoginRequest(buffer_arg: any): import("./schema_pb.js").LoginRequest;
declare function serialize_immudb_schema_LoginResponse(arg: any): Buffer;
declare function deserialize_immudb_schema_LoginResponse(buffer_arg: any): import("./schema_pb.js").LoginResponse;
declare function serialize_immudb_schema_SetRequest(arg: any): Buffer;
declare function deserialize_immudb_schema_SetRequest(buffer_arg: any): import("./schema_pb.js").SetRequest;
declare function serialize_immudb_schema_TxMetadata(arg: any): Buffer;
declare function deserialize_immudb_schema_TxMetadata(buffer_arg: any): import("./schema_pb.js").TxMetadata;
declare function serialize_immudb_schema_VerifiableSetRequest(arg: any): Buffer;
declare function deserialize_immudb_schema_VerifiableSetRequest(buffer_arg: any): import("./schema_pb.js").VerifiableSetRequest;
declare function serialize_immudb_schema_VerifiableTx(arg: any): Buffer;
declare function deserialize_immudb_schema_VerifiableTx(buffer_arg: any): import("./schema_pb.js").VerifiableTx;
declare function serialize_immudb_schema_KeyRequest(arg: any): Buffer;
declare function deserialize_immudb_schema_KeyRequest(buffer_arg: any): import("./schema_pb.js").KeyRequest;
declare function serialize_immudb_schema_Entry(arg: any): Buffer;
declare function deserialize_immudb_schema_Entry(buffer_arg: any): import("./schema_pb.js").Entry;
declare function serialize_immudb_schema_VerifiableGetRequest(arg: any): Buffer;
declare function deserialize_immudb_schema_VerifiableGetRequest(buffer_arg: any): import("./schema_pb.js").VerifiableGetRequest;
declare function serialize_immudb_schema_VerifiableEntry(arg: any): Buffer;
declare function deserialize_immudb_schema_VerifiableEntry(buffer_arg: any): import("./schema_pb.js").VerifiableEntry;
declare function serialize_immudb_schema_KeyListRequest(arg: any): Buffer;
declare function deserialize_immudb_schema_KeyListRequest(buffer_arg: any): import("./schema_pb.js").KeyListRequest;
declare function serialize_immudb_schema_Entries(arg: any): Buffer;
declare function deserialize_immudb_schema_Entries(buffer_arg: any): import("./schema_pb.js").Entries;
declare function serialize_immudb_schema_ExecAllRequest(arg: any): Buffer;
declare function deserialize_immudb_schema_ExecAllRequest(buffer_arg: any): import("./schema_pb.js").ExecAllRequest;
declare function serialize_immudb_schema_ScanRequest(arg: any): Buffer;
declare function deserialize_immudb_schema_ScanRequest(buffer_arg: any): import("./schema_pb.js").ScanRequest;
declare function serialize_immudb_schema_KeyPrefix(arg: any): Buffer;
declare function deserialize_immudb_schema_KeyPrefix(buffer_arg: any): import("./schema_pb.js").KeyPrefix;
declare function serialize_immudb_schema_EntryCount(arg: any): Buffer;
declare function deserialize_immudb_schema_EntryCount(buffer_arg: any): import("./schema_pb.js").EntryCount;
declare function serialize_immudb_schema_TxRequest(arg: any): Buffer;
declare function deserialize_immudb_schema_TxRequest(buffer_arg: any): import("./schema_pb.js").TxRequest;
declare function serialize_immudb_schema_Tx(arg: any): Buffer;
declare function deserialize_immudb_schema_Tx(buffer_arg: any): import("./schema_pb.js").Tx;
declare function serialize_immudb_schema_VerifiableTxRequest(arg: any): Buffer;
declare function deserialize_immudb_schema_VerifiableTxRequest(buffer_arg: any): import("./schema_pb.js").VerifiableTxRequest;
declare function serialize_immudb_schema_TxScanRequest(arg: any): Buffer;
declare function deserialize_immudb_schema_TxScanRequest(buffer_arg: any): import("./schema_pb.js").TxScanRequest;
declare function serialize_immudb_schema_TxList(arg: any): Buffer;
declare function deserialize_immudb_schema_TxList(buffer_arg: any): import("./schema_pb.js").TxList;
declare function serialize_immudb_schema_HistoryRequest(arg: any): Buffer;
declare function deserialize_immudb_schema_HistoryRequest(buffer_arg: any): import("./schema_pb.js").HistoryRequest;
declare function serialize_immudb_schema_HealthResponse(arg: any): Buffer;
declare function deserialize_immudb_schema_HealthResponse(buffer_arg: any): import("./schema_pb.js").HealthResponse;
declare function serialize_immudb_schema_ImmutableState(arg: any): Buffer;
declare function deserialize_immudb_schema_ImmutableState(buffer_arg: any): import("./schema_pb.js").ImmutableState;
declare function serialize_immudb_schema_ReferenceRequest(arg: any): Buffer;
declare function deserialize_immudb_schema_ReferenceRequest(buffer_arg: any): import("./schema_pb.js").ReferenceRequest;
declare function serialize_immudb_schema_VerifiableReferenceRequest(arg: any): Buffer;
declare function deserialize_immudb_schema_VerifiableReferenceRequest(buffer_arg: any): import("./schema_pb.js").VerifiableReferenceRequest;
declare function serialize_immudb_schema_ZAddRequest(arg: any): Buffer;
declare function deserialize_immudb_schema_ZAddRequest(buffer_arg: any): import("./schema_pb.js").ZAddRequest;
declare function serialize_immudb_schema_VerifiableZAddRequest(arg: any): Buffer;
declare function deserialize_immudb_schema_VerifiableZAddRequest(buffer_arg: any): import("./schema_pb.js").VerifiableZAddRequest;
declare function serialize_immudb_schema_ZScanRequest(arg: any): Buffer;
declare function deserialize_immudb_schema_ZScanRequest(buffer_arg: any): import("./schema_pb.js").ZScanRequest;
declare function serialize_immudb_schema_ZEntries(arg: any): Buffer;
declare function deserialize_immudb_schema_ZEntries(buffer_arg: any): import("./schema_pb.js").ZEntries;
declare function serialize_immudb_schema_Database(arg: any): Buffer;
declare function deserialize_immudb_schema_Database(buffer_arg: any): import("./schema_pb.js").Database;
declare function serialize_immudb_schema_DatabaseListResponse(arg: any): Buffer;
declare function deserialize_immudb_schema_DatabaseListResponse(buffer_arg: any): import("./schema_pb.js").DatabaseListResponse;
declare function serialize_immudb_schema_UseDatabaseReply(arg: any): Buffer;
declare function deserialize_immudb_schema_UseDatabaseReply(buffer_arg: any): import("./schema_pb.js").UseDatabaseReply;
declare function serialize_immudb_schema_ChangePermissionRequest(arg: any): Buffer;
declare function deserialize_immudb_schema_ChangePermissionRequest(buffer_arg: any): import("./schema_pb.js").ChangePermissionRequest;
declare function serialize_immudb_schema_SetActiveUserRequest(arg: any): Buffer;
declare function deserialize_immudb_schema_SetActiveUserRequest(buffer_arg: any): import("./schema_pb.js").SetActiveUserRequest;
export {};
