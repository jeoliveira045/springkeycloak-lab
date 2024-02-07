import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {SharedModule} from "./shared/shared.module";
import '@angular/compiler'
import {HttpClientModule} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(SharedModule)]
};
