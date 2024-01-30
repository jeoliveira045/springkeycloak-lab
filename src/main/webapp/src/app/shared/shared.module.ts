import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {KeycloakAngularModule} from "keycloak-angular";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    KeycloakAngularModule,
  ],
  providers:[
    {
      provide: APP_INITIALIZER,
      multi: true
    }
  ]
})
export class SharedModule { }
