import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { PropertyFormComponent } from './components/property-form/property-form.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { FooterComponent } from './components/footer/footer.component';
import {SearchService} from '../search.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,
  }
  from '@angular/material/input';
import{ MatIconModule } from '@angular/material/icon'
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import{ MatChipsModule} from '@angular/material/chips'
import{MatFormFieldModule} from '@angular/material/form-field'
import { NgProgress, NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { from } from 'rxjs';
import { SearchFormComponent } from './components/search-form/search-form.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    PropertyFormComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    NavbarComponent,
    PropertiesComponent,
    FooterComponent,
    SearchFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule, 
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
