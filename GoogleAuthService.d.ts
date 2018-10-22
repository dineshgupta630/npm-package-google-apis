/// <reference types="gapi.auth2" />
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import { GoogleApiService } from "./GoogleApiService";
import GoogleAuth = gapi.auth2.GoogleAuth;
export declare class GoogleAuthService {
    private googleApi;
    private GoogleAuth;
    constructor(googleApi: GoogleApiService);
    getAuth(): Observable<GoogleAuth>;
    private loadGapiAuth();
}
