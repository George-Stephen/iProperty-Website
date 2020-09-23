import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {Property} from 'src/property'


@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {
  properties : Property[] ;


  constructor( private http :HttpClient) { 
    console.log("It's Alive !");
  }

  getProperties(){
    let promise = new Promise((resolve,reject) =>{
      this.http.get<Property[]>("http://sallemrest.herokuapp.com/api/properties/")
      .toPromise()
      .then((response) =>{
          this.properties = response;
          resolve()
      })
    })
    return promise;
  }

}
