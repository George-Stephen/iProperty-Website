import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  image1:string ="assets/1.jpeg";

  constructor() { }

  ngOnInit(): void {
  }

}
