import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { SimpleComponent } from './simple.component';
import { EmployeeListComponent} from './track.component';
import { EmployeeTitlePipe } from './Employee.pipes';

@NgModule({ 
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, SimpleComponent, EmployeeListComponent, EmployeeTitlePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
