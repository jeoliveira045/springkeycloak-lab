import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";

@Component({
  selector: 'app-access-denied',
  standalone: true,
  imports: [],
  template: `
    <p>
      access-denied works!!
    </p>
  `,
  styles: ``
})
export class AccessDeniedComponent {

}
