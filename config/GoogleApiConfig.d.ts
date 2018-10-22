/// <reference types="gapi.auth2" />
import ClientConfig = gapi.auth2.ClientConfig;
export interface NgGapiClientConfig extends ClientConfig {
    discoveryDocs: string[];
}
export declare class GoogleApiConfig {
    protected clientConfig: NgGapiClientConfig;
    constructor(clientConfig: NgGapiClientConfig);
    getClientConfig(): NgGapiClientConfig;
}
