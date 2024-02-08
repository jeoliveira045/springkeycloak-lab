import {Component, OnInit} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {Author} from "../../domain/Author";
import {NgFor, NgForOf} from "@angular/common";
import {KeycloakService} from "keycloak-angular";
import Keycloak from "keycloak-js";
import {keyframes} from "@angular/animations";


@Component({
  selector: "app-author",
  standalone: true,
  imports:[NgFor,NgForOf],
  template: `
    <h1 *ngFor="let item of authorList">{{item.name}}</h1>
  `
})
export class AuthorComponent implements OnInit {

  authorList: Array<Author> = new Array<Author>()

  constructor(protected keycloak: KeycloakService,protected http: HttpClient) {
  }

  auth: string = ""

  ngOnInit() {
    this.http.get(`${environment.serverUrl}/author`)
      .subscribe((books:any) => {
        for(let i of books){
          this.authorList.push(i)
        }
      })

  }



}
