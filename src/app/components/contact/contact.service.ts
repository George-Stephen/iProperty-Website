import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private api_url = "https://mailthis.to/ace@10"

  constructor( private httpclient : HttpClient) { }

  PostMessage(input : any){
    return this.httpclient.post(this.api_url,input,{ responseType :  "text"}).pipe(map(
      (response) => {
        if (response) {
          return response;
        }
      },
      (error: any) => {
        return error;
      }
    ))
  }
}
