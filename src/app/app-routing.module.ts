import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component'
import {PropertyFormComponent} from './components/property-form/property-form.component'
import {SearchComponent} from './components/search/search.component'
import {ContactComponent} from './components/contact/contact.component'
import {AboutComponent} from './components/about/about.component'
import {NotFoundComponent} from './components/not-found/not-found.component'
import {PropertiesComponent} from './components/properties/properties.component'


const routes: Routes = [
  {path :'',component :DashboardComponent},
  {path :'new', component : PropertyFormComponent},
  {path :'search',component:SearchComponent},
  {path:'properties',component:PropertiesComponent},
  {path : 'contact',component:ContactComponent},
  {path :'about',component : AboutComponent},
  {path :'**',component :NotFoundComponent},
  {path :'search',component :SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
