import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Property } from './property';




@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  @Input() properties: Property;

  @Output() addProperty = new EventEmitter<Property>();

  newProperty = new Property(0,'', '', '','',0,'',0,0);

  submitQuote(){
    this.addProperty.emit(this.newProperty);
    this.newProperty = new Property(0,'', '', '','',0,'',0,0,);
  }
  constructor(private http:HttpClient) { }
}

