import { Component } from '@angular/core';
import { EmployeeService} from './employee.service'


@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
            <!-- <employee-list></employee-list>
            <event-details></event-details> -->
            <h2>Routing application</h2>
            <nav>
              <a routerLink="/EmployeeList" routerLinkActive="active">Employee Lists</a>
              <a routerLink="/EventDetails" routerLinkActive="active">Event Details</a>
            </nav>
            <router-outlet></router-outlet>
            `,
  providers:[EmployeeService],//registering
})
export class AppComponent  { name = 'Angular'; }
