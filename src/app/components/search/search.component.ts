import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output} from '@angular/core';
import { Property } from 'src/property';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { SearchService } from 'src/search.service';
import { ActivatedRoute } from '@angular/router';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    
  searchProperties = true;

  property: Property;
  propertyname:string

  constructor( 
    private searchService: SearchService,
  ) { }
  search(propertyname) {
    this.searchService.getUserDetail(propertyname).then(
      (results) => {
        this.property = this.searchService.newUser;
        console.log(results);
      },
     
    );
  }
ngOnInit() {
    
  }



  }

