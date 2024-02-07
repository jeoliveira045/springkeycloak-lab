import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {SecurityIdentity} from "../security/app-init";
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
      useFactory: (securityIdentity: SecurityIdentity) => securityIdentity.initializer,
      deps: [SecurityIdentity],
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
