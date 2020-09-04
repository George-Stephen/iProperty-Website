import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component'
import {PropertyFormComponent} from './components/property-form/property-form.component'
import {SearchComponent} from './components/search/search.component'
import {ContactComponent} from './components/contact/contact.component'
import {AboutComponent} from './components/about/about.component'


const routes: Routes = [
  {path :"",component :DashboardComponent},
  {path :"new",component : PropertyFormComponent},
  {path :"search",component:SearchComponent},
  {path : "Contact",component:ContactComponent}
  {path :"about",component : AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
