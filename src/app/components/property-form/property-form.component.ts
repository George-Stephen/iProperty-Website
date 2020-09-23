import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Property } from 'src/property';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from 'src/property.service';
@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent implements OnInit {
  posts:Property;
properties:Property[]

  @Output() addPost: EventEmitter<any> = new EventEmitter();

  name: string;
  image: any;
  price: number;
  description: string;
  PostForm: FormGroup;
  constructor(private fb:FormBuilder, private propertyService:PropertyService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    
  }

}
