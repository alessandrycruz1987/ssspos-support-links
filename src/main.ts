// @
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, provideTranslateService } from '@ngx-translate/core';
import {
  IonicRouteStrategy,
  provideIonicAngular
} from '@ionic/angular/standalone';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules
} from '@angular/router';

// RXJS
import { Observable } from 'rxjs';

// APP
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// Custom Loader to handle GitHub Pages relative paths and strict typing
export class MyTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) { }

  // Casting to 'any' solves the 'TranslationObject' type mismatch in Angular 20
  getTranslation(lang: string): Observable<any> {
    return this.http.get(`./assets/i18n/${lang}.json`);
  }
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
    // Correct Standalone configuration for ngx-translate 17+
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new MyTranslateLoader(http),
        deps: [HttpClient]
      }
    }),
  ],
});