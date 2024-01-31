import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";

@Component({
  selector: 'app-admim',
  standalone: true,
  imports: [],
  template: `
    <p>
      admim works!
    </p>
  `,
  styles: ``
})
export class AdminComponent implements OnInit {
  message = 'message'

  constructor(private http: HttpClient){}

  ngOnInit(): void{
    this.http.get(`${environment.serverUrl}`).subscribe((data: any) => this.message = data.message)
  }
}
