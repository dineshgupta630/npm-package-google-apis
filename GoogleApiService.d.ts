import { Observable } from "rxjs/Observable";
import { InjectionToken } from "@angular/core";
import { GoogleApiConfig, NgGapiClientConfig } from "./config/GoogleApiConfig";
export declare let NG_GAPI_CONFIG: InjectionToken<NgGapiClientConfig>;
export declare class GoogleApiService {
    private readonly gapiUrl;
    private config;
    constructor();
    onInitialise(config: NgGapiClientConfig): void;
    onLoad(): Observable<void>;
    getConfig(): GoogleApiConfig;
    private loadGapi();
}
