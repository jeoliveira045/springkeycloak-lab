import {APP_INITIALIZER, Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {KeycloakService} from "keycloak-angular";
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
  constructor(protected keycloak: KeycloakService){}

  logout(){
    this.keycloak.logout();
  }
}
