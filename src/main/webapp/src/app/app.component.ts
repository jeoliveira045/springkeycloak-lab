import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {KeycloakService} from "keycloak-angular";
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webapp';
  constructor(private keycloakService: KeycloakService){}
  logout(){
    this.keycloakService.logout()
  }
}
