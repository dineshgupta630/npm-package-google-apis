/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Observable } from "rxjs/Observable";
import { Injectable, InjectionToken } from "@angular/core";
import { GoogleApiConfig } from "./config/GoogleApiConfig";
export let /** @type {?} */ NG_GAPI_CONFIG = new InjectionToken("ng-gapi.config");
export class GoogleApiService {
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
function GoogleApiService_tsickle_Closure_declarations() {
    /** @type {?} */
    GoogleApiService.prototype.gapiUrl;
    /** @type {?} */
    GoogleApiService.prototype.config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29vZ2xlQXBpU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWdhcGktdjIvIiwic291cmNlcyI6WyJHb29nbGVBcGlTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFTLFVBQVUsRUFBRSxjQUFjLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFDLGVBQWUsRUFBcUIsTUFBTSwwQkFBMEIsQ0FBQztBQUc3RSxNQUFNLENBQUMscUJBQUksY0FBYyxHQUNyQixJQUFJLGNBQWMsQ0FBcUIsZ0JBQWdCLENBQUMsQ0FBQztBQUc3RCxNQUFNO0lBSUY7dUJBSG1DLG1DQUFtQztLQUlyRTs7Ozs7SUFFTSxZQUFZLENBQUMsTUFBMEI7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7Ozs7O0lBR3pCLE1BQU07UUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOzs7OztJQUdwQixTQUFTO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Ozs7O0lBR2YsUUFBUTtRQUNaLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBMkIsRUFBRSxFQUFFO1lBQ3JELHFCQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7Z0JBQ2YsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3ZCLENBQUM7U0FDTCxDQUFDLENBQUM7Ozs7WUFoQ1YsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtHb29nbGVBcGlDb25maWcsIE5nR2FwaUNsaWVudENvbmZpZ30gZnJvbSBcIi4vY29uZmlnL0dvb2dsZUFwaUNvbmZpZ1wiO1xuaW1wb3J0IHtPYnNlcnZlcn0gZnJvbSBcInJ4anMvT2JzZXJ2ZXJcIjtcblxuZXhwb3J0IGxldCBOR19HQVBJX0NPTkZJRzogSW5qZWN0aW9uVG9rZW48TmdHYXBpQ2xpZW50Q29uZmlnPiA9XG4gICAgbmV3IEluamVjdGlvblRva2VuPE5nR2FwaUNsaWVudENvbmZpZz4oXCJuZy1nYXBpLmNvbmZpZ1wiKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdvb2dsZUFwaVNlcnZpY2Uge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZ2FwaVVybDogc3RyaW5nID0gJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qcyc7XG4gICAgcHJpdmF0ZSBjb25maWc6IEdvb2dsZUFwaUNvbmZpZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkluaXRpYWxpc2UoY29uZmlnOiBOZ0dhcGlDbGllbnRDb25maWcpe1xuICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBHb29nbGVBcGlDb25maWcoY29uZmlnKTtcbiAgICAgICAgdGhpcy5sb2FkR2FwaSgpLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxvYWQoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRHYXBpKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbmZpZygpOiBHb29nbGVBcGlDb25maWcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkR2FwaSgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8Ym9vbGVhbj4pID0+IHtcbiAgICAgICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICBub2RlLnNyYyA9IHRoaXMuZ2FwaVVybDtcbiAgICAgICAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICAgICAgbm9kZS5jaGFyc2V0ID0gJ3V0Zi04JztcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBub2RlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHRydWUpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=