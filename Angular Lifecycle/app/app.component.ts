import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
            <!-- Your text: <input type="text" [(ngModel)]="userText" />
            <br>
            <simple [simpleInput]="userText"></simple> -->
            <list-employee></list-employee>
  `,
})
export class AppComponent  { }
