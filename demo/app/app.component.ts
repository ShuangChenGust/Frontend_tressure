import { Component } from '@angular/core';
import { TrainingComponent } from './training.components';
import { BindingsComponent } from './bindings.component';
import { EventsComponent } from './events.component';
import { AttributesComponent } from './attributes.component';



@Component({
  selector: 'my-app',
  template: `<h1>Hello World</h1>
            //  <my-training></my-training>
            //  <h4>Header h5 from app component<h4>
            //  <my-bindings></my-bindings>
            <my-attributes></my-attributes>`,
  directives: [TrainingComponent, BindingsComponent, EventsComponent, AttributesComponent],
  styles:[`h4{
    color:blue;
  }`]
})
export class AppComponent { }
