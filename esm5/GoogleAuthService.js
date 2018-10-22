/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import { GoogleApiService } from "./GoogleApiService";
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
export { GoogleAuthService };
function GoogleAuthService_tsickle_Closure_declarations() {
    /** @type {?} */
    GoogleAuthService.prototype.GoogleAuth;
    /** @type {?} */
    GoogleAuthService.prototype.googleApi;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29vZ2xlQXV0aFNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1nYXBpLXYyLyIsInNvdXJjZXMiOlsiR29vZ2xlQXV0aFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQzs7SUFPaEQsMkJBQW9CLFNBQTJCO1FBQS9DLGlCQUlDO1FBSm1CLGNBQVMsR0FBVCxTQUFTLENBQWtCOzBCQUZkLFNBQVM7UUFHdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDOUIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZCLENBQUMsQ0FBQztLQUNOOzs7O0lBRU0sbUNBQU87Ozs7O1FBQ1YsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO1NBQ3RFO1FBQ0QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7OztJQUdsQyx3Q0FBWTs7Ozs7UUFDaEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUE4QjtZQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBZ0I7b0JBQ2xGLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUN2QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ3JCLENBQUMsQ0FBQzthQUNOLENBQUMsQ0FBQztTQUNOLENBQUMsQ0FBQzs7O2dCQTFCVixVQUFVOzs7O2dCQUhILGdCQUFnQjs7NEJBTHhCOztTQVNhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtPYnNlcnZlcn0gZnJvbSBcInJ4anMvT2JzZXJ2ZXJcIjtcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwJztcbmltcG9ydCB7R29vZ2xlQXBpU2VydmljZX0gZnJvbSBcIi4vR29vZ2xlQXBpU2VydmljZVwiO1xuaW1wb3J0IEdvb2dsZUF1dGggPSBnYXBpLmF1dGgyLkdvb2dsZUF1dGg7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHb29nbGVBdXRoU2VydmljZSB7XG4gICAgcHJpdmF0ZSBHb29nbGVBdXRoOiBHb29nbGVBdXRoID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBnb29nbGVBcGk6IEdvb2dsZUFwaVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5nb29nbGVBcGkub25Mb2FkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZEdhcGlBdXRoKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBdXRoKCk6IE9ic2VydmFibGU8R29vZ2xlQXV0aD4ge1xuICAgICAgICBpZiAoIXRoaXMuR29vZ2xlQXV0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ29vZ2xlQXBpLm9uTG9hZCgpLm1lcmdlTWFwKCgpID0+IHRoaXMubG9hZEdhcGlBdXRoKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKHRoaXMuR29vZ2xlQXV0aCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkR2FwaUF1dGgoKTogT2JzZXJ2YWJsZTxHb29nbGVBdXRoPiB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEdvb2dsZUF1dGg+KSA9PiB7XG4gICAgICAgICAgICBnYXBpLmxvYWQoJ2F1dGgyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdhcGkuYXV0aDIuaW5pdCh0aGlzLmdvb2dsZUFwaS5nZXRDb25maWcoKS5nZXRDbGllbnRDb25maWcoKSkudGhlbigoYXV0aDogR29vZ2xlQXV0aCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5Hb29nbGVBdXRoID0gYXV0aDtcbiAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoYXV0aCk7XG4gICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==