import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
import { ReactiveFormsModule } from '@angular/forms'; 
import { ContactService } from './components/contact/contact.service';
import {PropertyServiceService} from './components/properties/property-service.service'

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
    FooterComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ContactService,
    PropertyServiceService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
