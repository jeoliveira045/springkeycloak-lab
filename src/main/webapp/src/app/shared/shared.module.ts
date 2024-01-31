import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {initializer} from "../security/app-init";
import {AppComponent} from "../app.component";
import {AdminComponent} from "../components/admin/admin.component";
import {ManagerComponent} from "../components/manager/manager.component";
import {AccessDeniedComponent} from "../components/access-denied/access-denied.component";

const SECURITYMODULES = [
  KeycloakAngularModule,
  AdminComponent,
  ManagerComponent,
  AccessDeniedComponent
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SECURITYMODULES
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
    SECURITYMODULES
  ]
})
export class SharedModule { }
