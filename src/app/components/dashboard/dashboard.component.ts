import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  image1:string ="assets/1.jpeg";
  image2:string ="assets/2.jpeg";
  image3:string = "assets/4.jpeg";

  constructor() { }

  ngOnInit(): void {
  }

}
