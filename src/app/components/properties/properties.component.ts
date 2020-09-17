import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  image1:string ="assets/1.jpeg";
  properties : any;

  constructor( public httpservice :HttpClient ) {
  
   }
 

  ngOnInit(): void {
    this.httpservice.get("https://salemrest.herokuapp.com/api/properties/").subscribe(properties =>{
    this.properties = properties
    console.log(this.properties)
  })
}

}
