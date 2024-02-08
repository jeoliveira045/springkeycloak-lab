import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom, Provider} from '@angular/core';
import {provideRouter, withComponentInputBinding, withViewTransitions} from '@angular/router';
import { routes } from './app.routes';
import {KeycloakAngularModule, KeycloakBearerInterceptor, KeycloakService} from "keycloak-angular";
import '@angular/compiler'
import {HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {environment} from "../environments/environment.development";
import {provideClientHydration} from "@angular/platform-browser";
import {provideAnimations} from "@angular/platform-browser/animations";
import {DOCUMENT} from "@angular/common";

function initializeKeycloak(keycloak: KeycloakService){
  return () => {
    console.log(keycloak)
    keycloak.init({
      config: environment.keycloak,
      initOptions:{
        onLoad: "login-required",
      },
      enableBearerInterceptor: true,
      bearerPrefix: 'Bearer '
    }
    )
  }
}

const KeycloakBearerInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: KeycloakBearerInterceptor,
  multi: true
}

const KeycloakInitializerProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initializeKeycloak,
  multi: true,
  deps: [KeycloakService]
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    KeycloakInitializerProvider,
    KeycloakBearerInterceptorProvider,
    KeycloakService,
    provideRouter(routes,withViewTransitions(),withComponentInputBinding()),
    provideClientHydration(),
    provideAnimations(),
    {
      provide: Document, useExisting: DOCUMENT
    }
  ]
};
