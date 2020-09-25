import { Injectable } from '@angular/core';
import { Property} from './property'
import { Observable, from } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  newUser: Property;
  postUrl:string = 'https://sallemrest.herokuapp.com/api/search/?search='
  console: any;

  constructor(private http: HttpClient) {
    this.newUser = new Property(0,"","","","",0,null,0,0);
}
getUserDetail(propertyname: string) {
  interface Property{
    description: string;
    name: string;
    location: string;
    avatar_url: string;
    id:number;
    price:number;
    image:any;
    latitude:number;
    longitude:number;
  }

  let promise = new Promise((resolve, reject) => {
    this.http
      .get<Property>(
        'https://sallemrest.herokuapp.com/api/search/?search='+
        propertyname
      )
      .toPromise()
      .then(
        (response) => {
          this.newUser = response;
          //console.log(this.newUser);
          resolve();
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
  });
  return promise;
}
}



  
  
