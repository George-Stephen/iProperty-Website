import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {PropertyServiceService} from './property-service.service'
import { Property } from 'src/property';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  image1:string ="assets/1.jpeg";
  properties : any;

  constructor( public httpservice :PropertyServiceService ) {
  
   }
 

  ngOnInit(): void {
   this.httpservice.getProperties().subscribe(res =>{
     this.properties = res['properties']
     console.log(this.properties)
   })
}

}
