import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {Property} from 'src/property'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {
  propertyUrl:string = 'https://sallemrest.herokuapp.com/api/properties/'
  constructor( private http :HttpClient) { 
   
  }

  getProperties(){
    return this.http.get("https://sallemrest.herokuapp.com/api/properties/")
  }
  
  
  }
  
