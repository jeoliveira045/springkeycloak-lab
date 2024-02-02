import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {Author} from "../../domain/Author";
import {NgFor, NgForOf} from "@angular/common";


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

  constructor(protected http: HttpClient){

  }

  ngOnInit() {
    this.http.get(`${environment.serverUrl}/author`)
      .subscribe((authors:any) => {
        for(let i of authors){
          this.authorList.push(i)
        }
      })
  }


}
