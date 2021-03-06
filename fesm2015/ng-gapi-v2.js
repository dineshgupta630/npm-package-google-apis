import { Observable } from 'rxjs/Observable';
import { Injectable, InjectionToken, NgModule } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class GoogleApiConfig {
    /**
     * @param {?} clientConfig
     */
    constructor(clientConfig) {
        this.clientConfig = clientConfig;
    }
    /**
     * @return {?}
     */
    getClientConfig() {
        return this.clientConfig;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
let /** @type {?} */ NG_GAPI_CONFIG = new InjectionToken("ng-gapi.config");
class GoogleApiService {
    constructor() {
        this.gapiUrl = 'https://apis.google.com/js/api.js';
    }
    /**
     * @param {?} config
     * @return {?}
     */
    onInitialise(config) {
        this.config = new GoogleApiConfig(config);
        this.loadGapi().subscribe();
    }
    /**
     * @return {?}
     */
    onLoad() {
        return this.loadGapi();
    }
    /**
     * @return {?}
     */
    getConfig() {
        return this.config;
    }
    /**
     * @return {?}
     */
    loadGapi() {
        return Observable.create((observer) => {
            let /** @type {?} */ node = document.createElement('script');
            node.src = this.gapiUrl;
            node.type = 'text/javascript';
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
            node.onload = () => {
                observer.next(true);
                observer.complete();
            };
        });
    }
}
GoogleApiService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
GoogleApiService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class GoogleAuthService {
    /**
     * @param {?} googleApi
     */
    constructor(googleApi) {
        this.googleApi = googleApi;
        this.GoogleAuth = undefined;
        this.googleApi.onLoad().subscribe(() => {
            this.loadGapiAuth();
        });
    }
    /**
     * @return {?}
     */
    getAuth() {
        if (!this.GoogleAuth) {
            return this.googleApi.onLoad().mergeMap(() => this.loadGapiAuth());
        }
        return Observable.of(this.GoogleAuth);
    }
    /**
     * @return {?}
     */
    loadGapiAuth() {
        return Observable.create((observer) => {
            gapi.load('auth2', () => {
                gapi.auth2.init(this.googleApi.getConfig().getClientConfig()).then((auth) => {
                    this.GoogleAuth = auth;
                    observer.next(auth);
                    observer.complete();
                });
            });
        });
    }
}
GoogleAuthService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
GoogleAuthService.ctorParameters = () => [
    { type: GoogleApiService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class GoogleApiModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: GoogleApiModule,
            providers: [
                GoogleAuthService,
                GoogleApiService
            ]
        };
    }
}
GoogleApiModule.decorators = [
    { type: NgModule },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { GoogleApiModule, GoogleAuthService, NG_GAPI_CONFIG, GoogleApiService, GoogleApiConfig };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZ2FwaS12Mi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctZ2FwaS12Mi9jb25maWcvR29vZ2xlQXBpQ29uZmlnLnRzIiwibmc6Ly9uZy1nYXBpLXYyL0dvb2dsZUFwaVNlcnZpY2UudHMiLCJuZzovL25nLWdhcGktdjIvR29vZ2xlQXV0aFNlcnZpY2UudHMiLCJuZzovL25nLWdhcGktdjIvR29vZ2xlQXBpTW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGllbnRDb25maWcgPSBnYXBpLmF1dGgyLkNsaWVudENvbmZpZztcblxuZXhwb3J0IGludGVyZmFjZSBOZ0dhcGlDbGllbnRDb25maWcgZXh0ZW5kcyBDbGllbnRDb25maWcge1xuICAgIGRpc2NvdmVyeURvY3M6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY2xhc3MgR29vZ2xlQXBpQ29uZmlnIHtcbiAgICBwcm90ZWN0ZWQgY2xpZW50Q29uZmlnOiBOZ0dhcGlDbGllbnRDb25maWc7XG5cbiAgICBjb25zdHJ1Y3RvcihjbGllbnRDb25maWc6IE5nR2FwaUNsaWVudENvbmZpZykge1xuICAgICAgICB0aGlzLmNsaWVudENvbmZpZyA9IGNsaWVudENvbmZpZ1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDbGllbnRDb25maWcoKTogTmdHYXBpQ2xpZW50Q29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50Q29uZmlnO1xuICAgIH1cbn1cbiIsImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtHb29nbGVBcGlDb25maWcsIE5nR2FwaUNsaWVudENvbmZpZ30gZnJvbSBcIi4vY29uZmlnL0dvb2dsZUFwaUNvbmZpZ1wiO1xuaW1wb3J0IHtPYnNlcnZlcn0gZnJvbSBcInJ4anMvT2JzZXJ2ZXJcIjtcblxuZXhwb3J0IGxldCBOR19HQVBJX0NPTkZJRzogSW5qZWN0aW9uVG9rZW48TmdHYXBpQ2xpZW50Q29uZmlnPiA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPE5nR2FwaUNsaWVudENvbmZpZz4oXCJuZy1nYXBpLmNvbmZpZ1wiKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdvb2dsZUFwaVNlcnZpY2Uge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZ2FwaVVybDogc3RyaW5nID0gJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qcyc7XG4gICAgcHJpdmF0ZSBjb25maWc6IEdvb2dsZUFwaUNvbmZpZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkluaXRpYWxpc2UoY29uZmlnOiBOZ0dhcGlDbGllbnRDb25maWcpe1xuICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBHb29nbGVBcGlDb25maWcoY29uZmlnKTtcbiAgICAgICAgdGhpcy5sb2FkR2FwaSgpLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxvYWQoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRHYXBpKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbmZpZygpOiBHb29nbGVBcGlDb25maWcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkR2FwaSgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8Ym9vbGVhbj4pID0+IHtcbiAgICAgICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICBub2RlLnNyYyA9IHRoaXMuZ2FwaVVybDtcbiAgICAgICAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICAgICAgbm9kZS5jaGFyc2V0ID0gJ3V0Zi04JztcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBub2RlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHRydWUpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7T2JzZXJ2ZXJ9IGZyb20gXCJyeGpzL09ic2VydmVyXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcCc7XG5pbXBvcnQge0dvb2dsZUFwaVNlcnZpY2V9IGZyb20gXCIuL0dvb2dsZUFwaVNlcnZpY2VcIjtcbmltcG9ydCBHb29nbGVBdXRoID0gZ2FwaS5hdXRoMi5Hb29nbGVBdXRoO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlQXV0aFNlcnZpY2Uge1xuICAgIHByaXZhdGUgR29vZ2xlQXV0aDogR29vZ2xlQXV0aCA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ29vZ2xlQXBpOiBHb29nbGVBcGlTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZ29vZ2xlQXBpLm9uTG9hZCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRHYXBpQXV0aCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QXV0aCgpOiBPYnNlcnZhYmxlPEdvb2dsZUF1dGg+IHtcbiAgICAgICAgaWYgKCF0aGlzLkdvb2dsZUF1dGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdvb2dsZUFwaS5vbkxvYWQoKS5tZXJnZU1hcCgoKSA9PiB0aGlzLmxvYWRHYXBpQXV0aCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZih0aGlzLkdvb2dsZUF1dGgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZEdhcGlBdXRoKCk6IE9ic2VydmFibGU8R29vZ2xlQXV0aD4ge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxHb29nbGVBdXRoPikgPT4ge1xuICAgICAgICAgICAgZ2FwaS5sb2FkKCdhdXRoMicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBnYXBpLmF1dGgyLmluaXQodGhpcy5nb29nbGVBcGkuZ2V0Q29uZmlnKCkuZ2V0Q2xpZW50Q29uZmlnKCkpLnRoZW4oKGF1dGg6IEdvb2dsZUF1dGgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuR29vZ2xlQXV0aCA9IGF1dGg7XG4gICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGF1dGgpO1xuICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBQcm92aWRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7R29vZ2xlQXV0aFNlcnZpY2V9IGZyb20gXCIuL0dvb2dsZUF1dGhTZXJ2aWNlXCI7XG5pbXBvcnQge0dvb2dsZUFwaVNlcnZpY2V9IGZyb20gXCIuL0dvb2dsZUFwaVNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBHb29nbGVBcGlNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEdvb2dsZUFwaU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIEdvb2dsZUF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIEdvb2dsZUFwaVNlcnZpY2VcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBU0ksWUFBWSxZQUFnQztRQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQTtLQUNuQzs7OztJQUVNLGVBQWU7UUFDbEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDOztDQUVoQzs7Ozs7O0FDaEJELHFCQUtXLGNBQWMsR0FDckIsSUFBSSxjQUFjLENBQXFCLGdCQUFnQixDQUFDLENBQUM7QUFHN0Q7SUFJSTt1QkFIbUMsbUNBQW1DO0tBSXJFOzs7OztJQUVNLFlBQVksQ0FBQyxNQUEwQjtRQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7Ozs7SUFHekIsTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOzs7OztJQUdwQixTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDOzs7OztJQUdmLFFBQVE7UUFDWixPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUEyQjtZQUNqRCxxQkFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxNQUFNLEdBQUc7Z0JBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3ZCLENBQUM7U0FDTCxDQUFDLENBQUM7Ozs7WUFoQ1YsVUFBVTs7Ozs7Ozs7O0FDUlg7Ozs7SUFZSSxZQUFvQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjswQkFGZCxTQUFTO1FBR3RDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QixDQUFDLENBQUM7S0FDTjs7OztJQUVNLE9BQU87UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7U0FDdEU7UUFDRCxPQUFPLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7OztJQUdsQyxZQUFZO1FBQ2hCLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQThCO1lBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFnQjtvQkFDbEYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDckIsQ0FBQyxDQUFDO2FBQ04sQ0FBQyxDQUFDO1NBQ04sQ0FBQyxDQUFDOzs7O1lBMUJWLFVBQVU7Ozs7WUFISCxnQkFBZ0I7Ozs7Ozs7QUNMeEI7Ozs7SUFNSSxPQUFPLE9BQU87UUFDVixPQUFPO1lBQ0gsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNQLGlCQUFpQjtnQkFDakIsZ0JBQWdCO2FBQ25CO1NBQ0osQ0FBQTtLQUNKOzs7WUFWSixRQUFROzs7Ozs7Ozs7Ozs7Ozs7In0=