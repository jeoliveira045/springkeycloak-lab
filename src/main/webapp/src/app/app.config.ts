import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {initializer} from "./security/app-init";

// const initializer = {
//   provide: APP_INITIALIZER,
//   useFactory: initializer,
//   deps:[KeycloakService],
//   multi: true
// }

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
