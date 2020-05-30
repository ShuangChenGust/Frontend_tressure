import { Component } from '@angular/core';

@Component({
  selector: 'my-pipes',
  template: `<h1>Pipes component</h1>
             <h2>{{name | uppercase}} </h2>
             <h2>{{name | lowercase}} </h2>
             <h2>{{name | slice:'2':'4'}} </h2>

             <h2>{{8.567}}
             <h2>{{8.567 | number : '1.1-2'}}</h2>
             <h2>{{8.567 | number :'2.2-4'}}</h2>
             <h2>{{8.567 | currency :'EUR'}}</h2>
             <h2>{{8.567 | currency :'USD'}}</h2>

             <h2>{{date | date:'fullDate'}}</h2>
             <h2>{{date | date:'shortDate'}}</h2>
             <h2>{{date | date:'mediumTime'}}</h2>
             `,
})
export class PipesComponent  {
  public name = " Angular Test"
  date = new Date();
 }
