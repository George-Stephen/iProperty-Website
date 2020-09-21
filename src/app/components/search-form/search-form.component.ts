import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  propertyName: string;
  @Output() searchOutput = new EventEmitter<any>();
  constructor() { }

  ngOnInit(){
  }
  getProperty() {
    this.searchOutput.emit(this.propertyName);
    this.propertyName = '';
}
}
