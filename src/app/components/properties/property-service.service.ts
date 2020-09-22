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
    return this.http.get<Property>("https://salemrest.herokuapp.com/api/properties/").subscribe(properties =>{
      this.properties = properties
    })
  }

}
