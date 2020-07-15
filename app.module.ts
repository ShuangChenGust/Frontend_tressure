import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PipesComponent } from './pipes.component';
import { EmployeeListComponent } from './employee-list.component';
import { HttpModule } from '@angular/http';
import { EventDetailsComponent } from './event-details.component';
import { RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { routingComponents} from './app-routing.module';

@NgModule({
  // imports:      [ BrowserModule, HttpModule, 
  //   RouterModule.forRoot([
  //     {path:'EmployeeList', component:EmployeeListComponent},
  //     {path:'EventDetails', component:EventDetailsComponent},
  //   ]) 
  // ],
  imports:[BrowserModule, HttpModule, AppRoutingModule ],
  declarations: [ AppComponent, PipesComponent, EmployeeListComponent, EventDetailsComponent, routingComponents ],
  // declarations: [ AppComponent, PipesComponent, EmployeeListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
