/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Observable } from "rxjs/Observable";
import { Injectable, InjectionToken } from "@angular/core";
import { GoogleApiConfig } from "./config/GoogleApiConfig";
export var /** @type {?} */ NG_GAPI_CONFIG = new InjectionToken("ng-gapi.config");
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
export { GoogleApiService };
function GoogleApiService_tsickle_Closure_declarations() {
    /** @type {?} */
    GoogleApiService.prototype.gapiUrl;
    /** @type {?} */
    GoogleApiService.prototype.config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29vZ2xlQXBpU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWdhcGktdjIvIiwic291cmNlcyI6WyJHb29nbGVBcGlTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFTLFVBQVUsRUFBRSxjQUFjLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFDLGVBQWUsRUFBcUIsTUFBTSwwQkFBMEIsQ0FBQztBQUc3RSxNQUFNLENBQUMscUJBQUksY0FBYyxHQUNyQixJQUFJLGNBQWMsQ0FBcUIsZ0JBQWdCLENBQUMsQ0FBQzs7SUFPekQ7dUJBSG1DLG1DQUFtQztLQUlyRTs7Ozs7SUFFTSx1Q0FBWTs7OztjQUFDLE1BQTBCO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDOzs7OztJQUd6QixpQ0FBTTs7OztRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7O0lBR3BCLG9DQUFTOzs7O1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Ozs7O0lBR2YsbUNBQVE7Ozs7O1FBQ1osTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUEyQjtZQUNqRCxxQkFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxNQUFNLEdBQUc7Z0JBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3ZCLENBQUM7U0FDTCxDQUFDLENBQUM7OztnQkFoQ1YsVUFBVTs7OzsyQkFSWDs7U0FTYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7R29vZ2xlQXBpQ29uZmlnLCBOZ0dhcGlDbGllbnRDb25maWd9IGZyb20gXCIuL2NvbmZpZy9Hb29nbGVBcGlDb25maWdcIjtcbmltcG9ydCB7T2JzZXJ2ZXJ9IGZyb20gXCJyeGpzL09ic2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgTkdfR0FQSV9DT05GSUc6IEluamVjdGlvblRva2VuPE5nR2FwaUNsaWVudENvbmZpZz4gPVxuICAgIG5ldyBJbmplY3Rpb25Ub2tlbjxOZ0dhcGlDbGllbnRDb25maWc+KFwibmctZ2FwaS5jb25maWdcIik7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHb29nbGVBcGlTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGdhcGlVcmw6IHN0cmluZyA9ICdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGkuanMnO1xuICAgIHByaXZhdGUgY29uZmlnOiBHb29nbGVBcGlDb25maWc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Jbml0aWFsaXNlKGNvbmZpZzogTmdHYXBpQ2xpZW50Q29uZmlnKXtcbiAgICAgICAgdGhpcy5jb25maWcgPSBuZXcgR29vZ2xlQXBpQ29uZmlnKGNvbmZpZyk7XG4gICAgICAgIHRoaXMubG9hZEdhcGkoKS5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Mb2FkKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkR2FwaSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb25maWcoKTogR29vZ2xlQXBpQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZEdhcGkoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGJvb2xlYW4+KSA9PiB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgbm9kZS5zcmMgPSB0aGlzLmdhcGlVcmw7XG4gICAgICAgICAgICBub2RlLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgICAgIG5vZGUuY2hhcnNldCA9ICd1dGYtOCc7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgbm9kZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh0cnVlKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19