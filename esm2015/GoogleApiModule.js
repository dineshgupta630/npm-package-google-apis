/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { GoogleAuthService } from "./GoogleAuthService";
import { GoogleApiService } from "./GoogleApiService";
export class GoogleApiModule {
    /**
     * @param {?} gapiConfigProvider
     * @return {?}
     */
    static forRoot(gapiConfigProvider) {
        return {
            ngModule: GoogleApiModule,
            providers: [
                gapiConfigProvider,
                GoogleAuthService,
                GoogleApiService
            ]
        };
    }
}
GoogleApiModule.decorators = [
    { type: NgModule },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29vZ2xlQXBpTW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctZ2FwaS12Mi8iLCJzb3VyY2VzIjpbIkdvb2dsZUFwaU1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFzQixRQUFRLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFHcEQsTUFBTTs7Ozs7SUFDRixNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUE0QjtRQUN2QyxNQUFNLENBQUM7WUFDSCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1Asa0JBQWtCO2dCQUNsQixpQkFBaUI7Z0JBQ2pCLGdCQUFnQjthQUNuQjtTQUNKLENBQUE7S0FDSjs7O1lBWEosUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFByb3ZpZGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtHb29nbGVBdXRoU2VydmljZX0gZnJvbSBcIi4vR29vZ2xlQXV0aFNlcnZpY2VcIjtcbmltcG9ydCB7R29vZ2xlQXBpU2VydmljZX0gZnJvbSBcIi4vR29vZ2xlQXBpU2VydmljZVwiO1xuXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIEdvb2dsZUFwaU1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoZ2FwaUNvbmZpZ1Byb3ZpZGVyOiBQcm92aWRlcik6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEdvb2dsZUFwaU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIGdhcGlDb25maWdQcm92aWRlcixcbiAgICAgICAgICAgICAgICBHb29nbGVBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgICBHb29nbGVBcGlTZXJ2aWNlXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=