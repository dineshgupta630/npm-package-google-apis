(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/Observable'), require('@angular/core'), require('rxjs/add/observable/of'), require('rxjs/add/operator/mergeMap')) :
    typeof define === 'function' && define.amd ? define('ng-gapi-v2', ['exports', 'rxjs/Observable', '@angular/core', 'rxjs/add/observable/of', 'rxjs/add/operator/mergeMap'], factory) :
    (factory((global['ng-gapi-v2'] = {}),global.rxjs.Observable,global.ng.core));
}(this, (function (exports,Observable,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GoogleApiConfig = (function () {
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
    var /** @type {?} */ NG_GAPI_CONFIG = new core.InjectionToken("ng-gapi.config");
    var GoogleApiService = (function () {
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
                return Observable.Observable.create(function (observer) {
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
            { type: core.Injectable },
        ];
        /** @nocollapse */
        GoogleApiService.ctorParameters = function () { return []; };
        return GoogleApiService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GoogleAuthService = (function () {
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
                return Observable.Observable.of(this.GoogleAuth);
            };
        /**
         * @return {?}
         */
        GoogleAuthService.prototype.loadGapiAuth = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return Observable.Observable.create(function (observer) {
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
            { type: core.Injectable },
        ];
        /** @nocollapse */
        GoogleAuthService.ctorParameters = function () {
            return [
                { type: GoogleApiService }
            ];
        };
        return GoogleAuthService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GoogleApiModule = (function () {
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
            { type: core.NgModule },
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

    exports.GoogleApiModule = GoogleApiModule;
    exports.GoogleAuthService = GoogleAuthService;
    exports.NG_GAPI_CONFIG = NG_GAPI_CONFIG;
    exports.GoogleApiService = GoogleApiService;
    exports.GoogleApiConfig = GoogleApiConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZ2FwaS12Mi51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLWdhcGktdjIvY29uZmlnL0dvb2dsZUFwaUNvbmZpZy50cyIsIm5nOi8vbmctZ2FwaS12Mi9Hb29nbGVBcGlTZXJ2aWNlLnRzIiwibmc6Ly9uZy1nYXBpLXYyL0dvb2dsZUF1dGhTZXJ2aWNlLnRzIiwibmc6Ly9uZy1nYXBpLXYyL0dvb2dsZUFwaU1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50Q29uZmlnID0gZ2FwaS5hdXRoMi5DbGllbnRDb25maWc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmdHYXBpQ2xpZW50Q29uZmlnIGV4dGVuZHMgQ2xpZW50Q29uZmlnIHtcbiAgICBkaXNjb3ZlcnlEb2NzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNsYXNzIEdvb2dsZUFwaUNvbmZpZyB7XG4gICAgcHJvdGVjdGVkIGNsaWVudENvbmZpZzogTmdHYXBpQ2xpZW50Q29uZmlnO1xuXG4gICAgY29uc3RydWN0b3IoY2xpZW50Q29uZmlnOiBOZ0dhcGlDbGllbnRDb25maWcpIHtcbiAgICAgICAgdGhpcy5jbGllbnRDb25maWcgPSBjbGllbnRDb25maWdcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2xpZW50Q29uZmlnKCk6IE5nR2FwaUNsaWVudENvbmZpZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudENvbmZpZztcbiAgICB9XG59XG4iLCJpbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7R29vZ2xlQXBpQ29uZmlnLCBOZ0dhcGlDbGllbnRDb25maWd9IGZyb20gXCIuL2NvbmZpZy9Hb29nbGVBcGlDb25maWdcIjtcbmltcG9ydCB7T2JzZXJ2ZXJ9IGZyb20gXCJyeGpzL09ic2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgTkdfR0FQSV9DT05GSUc6IEluamVjdGlvblRva2VuPE5nR2FwaUNsaWVudENvbmZpZz4gPVxuICAgIG5ldyBJbmplY3Rpb25Ub2tlbjxOZ0dhcGlDbGllbnRDb25maWc+KFwibmctZ2FwaS5jb25maWdcIik7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHb29nbGVBcGlTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGdhcGlVcmw6IHN0cmluZyA9ICdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGkuanMnO1xuICAgIHByaXZhdGUgY29uZmlnOiBHb29nbGVBcGlDb25maWc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Jbml0aWFsaXNlKGNvbmZpZzogTmdHYXBpQ2xpZW50Q29uZmlnKXtcbiAgICAgICAgdGhpcy5jb25maWcgPSBuZXcgR29vZ2xlQXBpQ29uZmlnKGNvbmZpZyk7XG4gICAgICAgIHRoaXMubG9hZEdhcGkoKS5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Mb2FkKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkR2FwaSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb25maWcoKTogR29vZ2xlQXBpQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZEdhcGkoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGJvb2xlYW4+KSA9PiB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgbm9kZS5zcmMgPSB0aGlzLmdhcGlVcmw7XG4gICAgICAgICAgICBub2RlLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgICAgIG5vZGUuY2hhcnNldCA9ICd1dGYtOCc7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgbm9kZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh0cnVlKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQge09ic2VydmVyfSBmcm9tIFwicnhqcy9PYnNlcnZlclwiO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXAnO1xuaW1wb3J0IHtHb29nbGVBcGlTZXJ2aWNlfSBmcm9tIFwiLi9Hb29nbGVBcGlTZXJ2aWNlXCI7XG5pbXBvcnQgR29vZ2xlQXV0aCA9IGdhcGkuYXV0aDIuR29vZ2xlQXV0aDtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdvb2dsZUF1dGhTZXJ2aWNlIHtcbiAgICBwcml2YXRlIEdvb2dsZUF1dGg6IEdvb2dsZUF1dGggPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdvb2dsZUFwaTogR29vZ2xlQXBpU2VydmljZSkge1xuICAgICAgICB0aGlzLmdvb2dsZUFwaS5vbkxvYWQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkR2FwaUF1dGgoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEF1dGgoKTogT2JzZXJ2YWJsZTxHb29nbGVBdXRoPiB7XG4gICAgICAgIGlmICghdGhpcy5Hb29nbGVBdXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nb29nbGVBcGkub25Mb2FkKCkubWVyZ2VNYXAoKCkgPT4gdGhpcy5sb2FkR2FwaUF1dGgoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YodGhpcy5Hb29nbGVBdXRoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRHYXBpQXV0aCgpOiBPYnNlcnZhYmxlPEdvb2dsZUF1dGg+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8R29vZ2xlQXV0aD4pID0+IHtcbiAgICAgICAgICAgIGdhcGkubG9hZCgnYXV0aDInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZ2FwaS5hdXRoMi5pbml0KHRoaXMuZ29vZ2xlQXBpLmdldENvbmZpZygpLmdldENsaWVudENvbmZpZygpKS50aGVuKChhdXRoOiBHb29nbGVBdXRoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLkdvb2dsZUF1dGggPSBhdXRoO1xuICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChhdXRoKTtcbiAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgUHJvdmlkZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0dvb2dsZUF1dGhTZXJ2aWNlfSBmcm9tIFwiLi9Hb29nbGVBdXRoU2VydmljZVwiO1xuaW1wb3J0IHtHb29nbGVBcGlTZXJ2aWNlfSBmcm9tIFwiLi9Hb29nbGVBcGlTZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlQXBpTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBHb29nbGVBcGlNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICBHb29nbGVBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgICBHb29nbGVBcGlTZXJ2aWNlXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJPYnNlcnZhYmxlIiwiSW5qZWN0YWJsZSIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O1FBTUE7UUFHSSx5QkFBWSxZQUFnQztZQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQTtTQUNuQzs7OztRQUVNLHlDQUFlOzs7O2dCQUNsQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7OzhCQWRqQztRQWdCQzs7Ozs7O0FDaEJELHlCQUtXLGNBQWMsR0FDckIsSUFBSUEsbUJBQWMsQ0FBcUIsZ0JBQWdCLENBQUMsQ0FBQzs7UUFPekQ7MkJBSG1DLG1DQUFtQztTQUlyRTs7Ozs7UUFFTSx1Q0FBWTs7OztzQkFBQyxNQUEwQjtnQkFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDOzs7OztRQUd6QixpQ0FBTTs7OztnQkFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7Ozs7UUFHcEIsb0NBQVM7Ozs7Z0JBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDOzs7OztRQUdmLG1DQUFROzs7OztnQkFDWixPQUFPQyxxQkFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQTJCO29CQUNqRCxxQkFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDO29CQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO29CQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztvQkFDdkIsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDM0QsSUFBSSxDQUFDLE1BQU0sR0FBRzt3QkFDVixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ3ZCLENBQUM7aUJBQ0wsQ0FBQyxDQUFDOzs7b0JBaENWQyxlQUFVOzs7OytCQVJYOzs7Ozs7O0FDQUE7UUFZSSwyQkFBb0IsU0FBMkI7WUFBL0MsaUJBSUM7WUFKbUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7OEJBRmQsU0FBUztZQUd0QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3ZCLENBQUMsQ0FBQztTQUNOOzs7O1FBRU0sbUNBQU87Ozs7O2dCQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxFQUFFLEdBQUEsQ0FBQyxDQUFDO2lCQUN0RTtnQkFDRCxPQUFPRCxxQkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Ozs7O1FBR2xDLHdDQUFZOzs7OztnQkFDaEIsT0FBT0EscUJBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUE4QjtvQkFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7d0JBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQWdCOzRCQUNsRixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs0QkFDdkIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO3lCQUNyQixDQUFDLENBQUM7cUJBQ04sQ0FBQyxDQUFDO2lCQUNOLENBQUMsQ0FBQzs7O29CQTFCVkMsZUFBVTs7Ozs7d0JBSEgsZ0JBQWdCOzs7Z0NBTHhCOzs7Ozs7O0FDQUE7Ozs7OztRQU1XLHVCQUFPOzs7WUFBZDtnQkFDSSxPQUFPO29CQUNILFFBQVEsRUFBRSxlQUFlO29CQUN6QixTQUFTLEVBQUU7d0JBQ1AsaUJBQWlCO3dCQUNqQixnQkFBZ0I7cUJBQ25CO2lCQUNKLENBQUE7YUFDSjs7b0JBVkpDLGFBQVE7OzhCQUpUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=