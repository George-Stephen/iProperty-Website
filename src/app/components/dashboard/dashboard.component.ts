import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  image:string ="assets/1.jpeg";
  company:string = "assets/Hotstep_holdings.jpeg";
  image1 :string = "assets/image1.jpeg";
  image2 :string = "assets/image2.jpeg";
  image3 :string = "assets/image3.jpeg";
  stephen : string = "assets/stephen.jpeg";
  peter : string = "assets/peter.jpeg";
  anthony : string = "assets/anthony.jpeg";


  constructor() { }

  ngOnInit(): void {
  }

}
