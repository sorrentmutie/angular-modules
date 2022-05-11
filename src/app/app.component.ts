// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-modules';

  constructor(){//private httpClient: HttpClient
    // httpClient.get("https://randomuser.me/api").subscribe((response)=>{console.log(response)});
  }
}
