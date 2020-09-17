import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {
  properties : any ;


  constructor( private http :HttpClient) { 
    console.log("It's Alive !");
  }

  getProperties(){
    return this.http.get("https://salemrest.herokuapp.com/api/properties/").subscribe(properties =>{
      this.properties = properties
    })
  }

}
