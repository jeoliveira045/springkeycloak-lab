import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {initializer} from "./security/app-init";
import {SharedModule} from "./shared/shared.module";
import '@angular/compiler'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(SharedModule)]
};
