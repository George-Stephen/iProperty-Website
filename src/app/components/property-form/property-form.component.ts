import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Property } from 'src/property';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent implements OnInit {
  @Input() properties: Property;

  @Output() addProperty = new EventEmitter<Property>();

  newProperty = new Property(0,'', '', '','',0,'');

  submitQuote(){
    this.addProperty.emit(this.newProperty);
    this.newProperty = new Property(0,'', '', '','',0,'',);
  }

 
  constructor() { }

  ngOnInit(): void {
   
  }
  }


