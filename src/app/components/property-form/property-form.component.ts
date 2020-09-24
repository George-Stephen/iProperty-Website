import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Property } from 'src/property';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PropertyService } from 'src/property.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent implements OnInit {
  properties:Property[];
  posts:Property;
 
  @Output() addPost: EventEmitter<any> = new EventEmitter();

  name: string;
  image: any;
  description: string;
  price: number;
  location:string;
  PostForm: FormGroup;

  constructor(private fb:FormBuilder, private propertyService:PropertyService,  private route:ActivatedRoute) { }

  ngOnInit(): void {
   
    this.propertyService.getProperties().subscribe(properties => {
      this.properties = properties;
    });

    this.PostForm = this.fb.group ({
      name: ['',[Validators.required]],
      image: ['',[Validators.required]],
      price: ['',[Validators.required]],
      description: ['',[Validators.required]],
      location: ['',[Validators.required]],
    })
    
  
  }
  get f(){
    return this.PostForm.controls;
  }

  onFileChange(event) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file)
      this.PostForm.patchValue({
        image: file
      });
    }
  }
   
  onSubmit(){
    const property = this.PostForm.value
    console.log(property)

    this.propertyService.addProperty(property).subscribe((data)=>{
      console.log(data)
    },
    (error)=>{
      console.log(error)
    })
  }
  
  }
