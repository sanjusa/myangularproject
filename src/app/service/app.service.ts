import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Data } from '../models/data';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  url="http://localhost:3000/author";
  httpData:any;
  login() {
    this.http.get<Data[]>(this.url).subscribe(data => {
      this.httpData=data;
      console.log(this.httpData);
    })

  }
}
