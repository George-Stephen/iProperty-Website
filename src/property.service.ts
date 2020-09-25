import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Property } from './property';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  propertyUrl:string = 'https://sallemrest.herokuapp.com/api/properties/'
  createPropertyUrl:string = 'https://salland.herokuapp.com/api/properties/create'
  constructor(private http:HttpClient) { 
  }
  getProperties():Observable<Property[]> {
    return this.http.get<Property[]>(`${this.propertyUrl}`);
  }
  addProperty(post:any):Observable<Property> {
    return this.http.post<Property>(this.createPropertyUrl, post, httpOptions);
  }

  }

 
