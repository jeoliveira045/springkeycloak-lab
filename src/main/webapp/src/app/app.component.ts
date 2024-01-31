import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
