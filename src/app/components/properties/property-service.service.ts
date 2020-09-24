import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {Property} from 'src/property'


@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {
  properties : Property ;


  constructor( private http :HttpClient) { 
    console.log("It's Alive !");
  }

  getProperties(){
    return this.http.get("https://sallemrest.herokuapp.com/api/properties/")
  }

}
