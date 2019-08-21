import { Component } from '@angular/core';
import { AppService} from './service/app.service';
import { HttpClient } from '@angular/common/http';

import { Data } from './models/data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  url="http://localhost:3000/datas";
  httpData:any;
  acc:any;
  
  login() {
    this.http.get<Data[]>(this.url).subscribe(data => {
      this.httpData=data;
      this.acc=this.httpData.accountdetails;
    })

  }
  title = 'practice';
}
