import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {Author} from "../../domain/Author";
import {NgFor, NgForOf} from "@angular/common";
import {Book} from "../../domain/Book";


@Component({
  selector: "app-book",
  standalone: true,
  imports:[NgFor,NgForOf],
  template: `
    <h1 *ngFor="let item of bookList">{{item.name}}</h1>
  `
})
export class BookComponent implements OnInit {

  bookList: Array<Book> = new Array<Book>()

  constructor(protected http: HttpClient){

  }

  ngOnInit() {
    this.http.get(`${environment.serverUrl}/book`)
      .subscribe((books:any) => {
        for(let i of books){
          this.bookList.push(i)
        }
      })
  }


}
