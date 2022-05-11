import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  constructor(private httpClient: HttpClient) {
    console.log("Sono passato da HomeService come Paperino");
    httpClient.get("https://randomuser.me/api").subscribe((response)=>{console.log(response)});

   }
}
