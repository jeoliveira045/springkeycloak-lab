import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [],
  template: `
    <p>
      manager works!
    </p>
  `,
  styles: ``
})
export class ManagerComponent implements OnInit{
  message = 'message'

  constructor(private http: HttpClient){}

  ngOnInit(): void{
    this.http.get(`${environment.serverUrl}`).subscribe((data: any) => this.message = data.message)
  }
}
