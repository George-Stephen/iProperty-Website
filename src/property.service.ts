import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Property } from './property';
import { Observable } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  propertyUrl:string = 'https://salemrest.herokuapp.com/api/posts/'
  addPropertyUrl:string = 'https://salemrest.herokuapp.com/properties/api/properties/create'
  deletePropertyUrl:string = 'https://salemrest.herokuapp.com/api/properties'

  constructor(private http:HttpClient) { }
}


