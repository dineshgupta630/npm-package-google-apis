/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import { GoogleApiService } from "./GoogleApiService";
export class GoogleAuthService {
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
function GoogleAuthService_tsickle_Closure_declarations() {
    /** @type {?} */
    GoogleAuthService.prototype.GoogleAuth;
    /** @type {?} */
    GoogleAuthService.prototype.googleApi;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29vZ2xlQXV0aFNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1nYXBpLXYyLyIsInNvdXJjZXMiOlsiR29vZ2xlQXV0aFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUlwRCxNQUFNOzs7O0lBR0YsWUFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7MEJBRmQsU0FBUztRQUd0QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZCLENBQUMsQ0FBQztLQUNOOzs7O0lBRU0sT0FBTztRQUNWLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1NBQ3RFO1FBQ0QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7OztJQUdsQyxZQUFZO1FBQ2hCLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBOEIsRUFBRSxFQUFFO1lBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQWdCLEVBQUUsRUFBRTtvQkFDdEYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDckIsQ0FBQyxDQUFDO2FBQ04sQ0FBQyxDQUFDO1NBQ04sQ0FBQyxDQUFDOzs7O1lBMUJWLFVBQVU7Ozs7WUFISCxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7T2JzZXJ2ZXJ9IGZyb20gXCJyeGpzL09ic2VydmVyXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcCc7XG5pbXBvcnQge0dvb2dsZUFwaVNlcnZpY2V9IGZyb20gXCIuL0dvb2dsZUFwaVNlcnZpY2VcIjtcbmltcG9ydCBHb29nbGVBdXRoID0gZ2FwaS5hdXRoMi5Hb29nbGVBdXRoO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlQXV0aFNlcnZpY2Uge1xuICAgIHByaXZhdGUgR29vZ2xlQXV0aDogR29vZ2xlQXV0aCA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ29vZ2xlQXBpOiBHb29nbGVBcGlTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZ29vZ2xlQXBpLm9uTG9hZCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRHYXBpQXV0aCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QXV0aCgpOiBPYnNlcnZhYmxlPEdvb2dsZUF1dGg+IHtcbiAgICAgICAgaWYgKCF0aGlzLkdvb2dsZUF1dGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdvb2dsZUFwaS5vbkxvYWQoKS5tZXJnZU1hcCgoKSA9PiB0aGlzLmxvYWRHYXBpQXV0aCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZih0aGlzLkdvb2dsZUF1dGgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZEdhcGlBdXRoKCk6IE9ic2VydmFibGU8R29vZ2xlQXV0aD4ge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxHb29nbGVBdXRoPikgPT4ge1xuICAgICAgICAgICAgZ2FwaS5sb2FkKCdhdXRoMicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBnYXBpLmF1dGgyLmluaXQodGhpcy5nb29nbGVBcGkuZ2V0Q29uZmlnKCkuZ2V0Q2xpZW50Q29uZmlnKCkpLnRoZW4oKGF1dGg6IEdvb2dsZUF1dGgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuR29vZ2xlQXV0aCA9IGF1dGg7XG4gICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGF1dGgpO1xuICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=