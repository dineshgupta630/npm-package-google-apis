import { Observable } from 'rxjs/Observable';
import { Injectable, InjectionToken, NgModule } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GoogleApiConfig = /** @class */ (function () {
    function GoogleApiConfig(clientConfig) {
        this.clientConfig = clientConfig;
    }
    /**
     * @return {?}
     */
    GoogleApiConfig.prototype.getClientConfig = /**
     * @return {?}
     */
    function () {
        return this.clientConfig;
    };
    return GoogleApiConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ NG_GAPI_CONFIG = new InjectionToken("ng-gapi.config");
var GoogleApiService = /** @class */ (function () {
    function GoogleApiService() {
        this.gapiUrl = 'https://apis.google.com/js/api.js';
    }
    /**
     * @param {?} config
     * @return {?}
     */
    GoogleApiService.prototype.onInitialise = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = new GoogleApiConfig(config);
        this.loadGapi().subscribe();
    };
    /**
     * @return {?}
     */
    GoogleApiService.prototype.onLoad = /**
     * @return {?}
     */
    function () {
        return this.loadGapi();
    };
    /**
     * @return {?}
     */
    GoogleApiService.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return this.config;
    };
    /**
     * @return {?}
     */
    GoogleApiService.prototype.loadGapi = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return Observable.create(function (observer) {
            var /** @type {?} */ node = document.createElement('script');
            node.src = _this.gapiUrl;
            node.type = 'text/javascript';
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
            node.onload = function () {
                observer.next(true);
                observer.complete();
            };
        });
    };
    GoogleApiService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GoogleApiService.ctorParameters = function () { return []; };
    return GoogleApiService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GoogleAuthService = /** @class */ (function () {
    function GoogleAuthService(googleApi) {
        var _this = this;
        this.googleApi = googleApi;
        this.GoogleAuth = undefined;
        this.googleApi.onLoad().subscribe(function () {
            _this.loadGapiAuth();
        });
    }
    /**
     * @return {?}
     */
    GoogleAuthService.prototype.getAuth = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.GoogleAuth) {
            return this.googleApi.onLoad().mergeMap(function () { return _this.loadGapiAuth(); });
        }
        return Observable.of(this.GoogleAuth);
    };
    /**
     * @return {?}
     */
    GoogleAuthService.prototype.loadGapiAuth = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return Observable.create(function (observer) {
            gapi.load('auth2', function () {
                gapi.auth2.init(_this.googleApi.getConfig().getClientConfig()).then(function (auth) {
                    _this.GoogleAuth = auth;
                    observer.next(auth);
                    observer.complete();
                });
            });
        });
    };
    GoogleAuthService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GoogleAuthService.ctorParameters = function () { return [
        { type: GoogleApiService }
    ]; };
    return GoogleAuthService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GoogleApiModule = /** @class */ (function () {
    function GoogleApiModule() {
    }
    /**
     * @return {?}
     */
    GoogleApiModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: GoogleApiModule,
            providers: [
                GoogleAuthService,
                GoogleApiService
            ]
        };
    };
    GoogleApiModule.decorators = [
        { type: NgModule },
    ];
    return GoogleApiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { GoogleApiModule, GoogleAuthService, NG_GAPI_CONFIG, GoogleApiService, GoogleApiConfig };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZ2FwaS12Mi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctZ2FwaS12Mi9jb25maWcvR29vZ2xlQXBpQ29uZmlnLnRzIiwibmc6Ly9uZy1nYXBpLXYyL0dvb2dsZUFwaVNlcnZpY2UudHMiLCJuZzovL25nLWdhcGktdjIvR29vZ2xlQXV0aFNlcnZpY2UudHMiLCJuZzovL25nLWdhcGktdjIvR29vZ2xlQXBpTW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGllbnRDb25maWcgPSBnYXBpLmF1dGgyLkNsaWVudENvbmZpZztcblxuZXhwb3J0IGludGVyZmFjZSBOZ0dhcGlDbGllbnRDb25maWcgZXh0ZW5kcyBDbGllbnRDb25maWcge1xuICAgIGRpc2NvdmVyeURvY3M6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY2xhc3MgR29vZ2xlQXBpQ29uZmlnIHtcbiAgICBwcm90ZWN0ZWQgY2xpZW50Q29uZmlnOiBOZ0dhcGlDbGllbnRDb25maWc7XG5cbiAgICBjb25zdHJ1Y3RvcihjbGllbnRDb25maWc6IE5nR2FwaUNsaWVudENvbmZpZykge1xuICAgICAgICB0aGlzLmNsaWVudENvbmZpZyA9IGNsaWVudENvbmZpZ1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDbGllbnRDb25maWcoKTogTmdHYXBpQ2xpZW50Q29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50Q29uZmlnO1xuICAgIH1cbn1cbiIsImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtHb29nbGVBcGlDb25maWcsIE5nR2FwaUNsaWVudENvbmZpZ30gZnJvbSBcIi4vY29uZmlnL0dvb2dsZUFwaUNvbmZpZ1wiO1xuaW1wb3J0IHtPYnNlcnZlcn0gZnJvbSBcInJ4anMvT2JzZXJ2ZXJcIjtcblxuZXhwb3J0IGxldCBOR19HQVBJX0NPTkZJRzogSW5qZWN0aW9uVG9rZW48TmdHYXBpQ2xpZW50Q29uZmlnPiA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPE5nR2FwaUNsaWVudENvbmZpZz4oXCJuZy1nYXBpLmNvbmZpZ1wiKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdvb2dsZUFwaVNlcnZpY2Uge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZ2FwaVVybDogc3RyaW5nID0gJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qcyc7XG4gICAgcHJpdmF0ZSBjb25maWc6IEdvb2dsZUFwaUNvbmZpZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkluaXRpYWxpc2UoY29uZmlnOiBOZ0dhcGlDbGllbnRDb25maWcpe1xuICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBHb29nbGVBcGlDb25maWcoY29uZmlnKTtcbiAgICAgICAgdGhpcy5sb2FkR2FwaSgpLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxvYWQoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRHYXBpKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbmZpZygpOiBHb29nbGVBcGlDb25maWcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkR2FwaSgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8Ym9vbGVhbj4pID0+IHtcbiAgICAgICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICBub2RlLnNyYyA9IHRoaXMuZ2FwaVVybDtcbiAgICAgICAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICAgICAgbm9kZS5jaGFyc2V0ID0gJ3V0Zi04JztcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBub2RlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHRydWUpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7T2JzZXJ2ZXJ9IGZyb20gXCJyeGpzL09ic2VydmVyXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcCc7XG5pbXBvcnQge0dvb2dsZUFwaVNlcnZpY2V9IGZyb20gXCIuL0dvb2dsZUFwaVNlcnZpY2VcIjtcbmltcG9ydCBHb29nbGVBdXRoID0gZ2FwaS5hdXRoMi5Hb29nbGVBdXRoO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlQXV0aFNlcnZpY2Uge1xuICAgIHByaXZhdGUgR29vZ2xlQXV0aDogR29vZ2xlQXV0aCA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ29vZ2xlQXBpOiBHb29nbGVBcGlTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZ29vZ2xlQXBpLm9uTG9hZCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRHYXBpQXV0aCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QXV0aCgpOiBPYnNlcnZhYmxlPEdvb2dsZUF1dGg+IHtcbiAgICAgICAgaWYgKCF0aGlzLkdvb2dsZUF1dGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdvb2dsZUFwaS5vbkxvYWQoKS5tZXJnZU1hcCgoKSA9PiB0aGlzLmxvYWRHYXBpQXV0aCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZih0aGlzLkdvb2dsZUF1dGgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZEdhcGlBdXRoKCk6IE9ic2VydmFibGU8R29vZ2xlQXV0aD4ge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxHb29nbGVBdXRoPikgPT4ge1xuICAgICAgICAgICAgZ2FwaS5sb2FkKCdhdXRoMicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBnYXBpLmF1dGgyLmluaXQodGhpcy5nb29nbGVBcGkuZ2V0Q29uZmlnKCkuZ2V0Q2xpZW50Q29uZmlnKCkpLnRoZW4oKGF1dGg6IEdvb2dsZUF1dGgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuR29vZ2xlQXV0aCA9IGF1dGg7XG4gICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGF1dGgpO1xuICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBQcm92aWRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7R29vZ2xlQXV0aFNlcnZpY2V9IGZyb20gXCIuL0dvb2dsZUF1dGhTZXJ2aWNlXCI7XG5pbXBvcnQge0dvb2dsZUFwaVNlcnZpY2V9IGZyb20gXCIuL0dvb2dsZUFwaVNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBHb29nbGVBcGlNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEdvb2dsZUFwaU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIEdvb2dsZUF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIEdvb2dsZUFwaVNlcnZpY2VcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFNQTtJQUdJLHlCQUFZLFlBQWdDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFBO0tBQ25DOzs7O0lBRU0seUNBQWU7Ozs7UUFDbEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDOzswQkFkakM7SUFnQkM7Ozs7OztBQ2hCRCxxQkFLVyxjQUFjLEdBQ3JCLElBQUksY0FBYyxDQUFxQixnQkFBZ0IsQ0FBQyxDQUFDOztJQU96RDt1QkFIbUMsbUNBQW1DO0tBSXJFOzs7OztJQUVNLHVDQUFZOzs7O2NBQUMsTUFBMEI7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7Ozs7O0lBR3pCLGlDQUFNOzs7O1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7O0lBR3BCLG9DQUFTOzs7O1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDOzs7OztJQUdmLG1DQUFROzs7OztRQUNaLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQTJCO1lBQ2pELHFCQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLE1BQU0sR0FBRztnQkFDVixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDdkIsQ0FBQztTQUNMLENBQUMsQ0FBQzs7O2dCQWhDVixVQUFVOzs7OzJCQVJYOzs7Ozs7O0FDQUE7SUFZSSwyQkFBb0IsU0FBMkI7UUFBL0MsaUJBSUM7UUFKbUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7MEJBRmQsU0FBUztRQUd0QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUM5QixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkIsQ0FBQyxDQUFDO0tBQ047Ozs7SUFFTSxtQ0FBTzs7Ozs7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxFQUFFLEdBQUEsQ0FBQyxDQUFDO1NBQ3RFO1FBQ0QsT0FBTyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzs7Ozs7SUFHbEMsd0NBQVk7Ozs7O1FBQ2hCLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQThCO1lBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFnQjtvQkFDbEYsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDckIsQ0FBQyxDQUFDO2FBQ04sQ0FBQyxDQUFDO1NBQ04sQ0FBQyxDQUFDOzs7Z0JBMUJWLFVBQVU7Ozs7Z0JBSEgsZ0JBQWdCOzs0QkFMeEI7Ozs7Ozs7QUNBQTs7Ozs7O0lBTVcsdUJBQU87OztJQUFkO1FBQ0ksT0FBTztZQUNILFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDUCxpQkFBaUI7Z0JBQ2pCLGdCQUFnQjthQUNuQjtTQUNKLENBQUE7S0FDSjs7Z0JBVkosUUFBUTs7MEJBSlQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==