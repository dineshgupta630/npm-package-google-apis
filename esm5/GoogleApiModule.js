/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { GoogleAuthService } from "./GoogleAuthService";
import { GoogleApiService } from "./GoogleApiService";
var GoogleApiModule = /** @class */ (function () {
    function GoogleApiModule() {
    }
    /**
     * @param {?} gapiConfigProvider
     * @return {?}
     */
    GoogleApiModule.forRoot = /**
     * @param {?} gapiConfigProvider
     * @return {?}
     */
    function (gapiConfigProvider) {
        return {
            ngModule: GoogleApiModule,
            providers: [
                gapiConfigProvider,
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
export { GoogleApiModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29vZ2xlQXBpTW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZ2FwaS12Mi8iLCJzb3VyY2VzIjpbIkdvb2dsZUFwaU1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFzQixRQUFRLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7O0lBSXpDLHVCQUFPOzs7O0lBQWQsVUFBZSxrQkFBNEI7UUFDdkMsTUFBTSxDQUFDO1lBQ0gsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNQLGtCQUFrQjtnQkFDbEIsaUJBQWlCO2dCQUNqQixnQkFBZ0I7YUFDbkI7U0FDSixDQUFBO0tBQ0o7O2dCQVhKLFFBQVE7OzBCQUpUOztTQUthLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBQcm92aWRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7R29vZ2xlQXV0aFNlcnZpY2V9IGZyb20gXCIuL0dvb2dsZUF1dGhTZXJ2aWNlXCI7XG5pbXBvcnQge0dvb2dsZUFwaVNlcnZpY2V9IGZyb20gXCIuL0dvb2dsZUFwaVNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBHb29nbGVBcGlNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KGdhcGlDb25maWdQcm92aWRlcjogUHJvdmlkZXIpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBHb29nbGVBcGlNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICBnYXBpQ29uZmlnUHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgR29vZ2xlQXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgR29vZ2xlQXBpU2VydmljZVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfVxufVxuIl19