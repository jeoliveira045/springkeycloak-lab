import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {initializer} from "../security/app-init";
import {AppComponent} from "../app.component";
import {AccessDeniedComponent} from "../components/access-denied/access-denied.component";
import {AuthorComponent} from "../components/author/author.component";
import {RouterLink} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

const SECURITYMODULES = [
  KeycloakAngularModule,
  AccessDeniedComponent
]

const COMPONENTS = [
  AuthorComponent,
  RouterLink,
]

const SERVICEMODULES = [
  HttpClientModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SECURITYMODULES,
    COMPONENTS,
    SERVICEMODULES
  ],
  providers:[
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [KeycloakService],
      multi: true
    }
  ],
  exports:[
    CommonModule,
    SECURITYMODULES,
    COMPONENTS,
    SERVICEMODULES
  ]
})
export class SharedModule { }
