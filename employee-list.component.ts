import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'employee-list',
  template: `<h1>Employee list</h1>
            <ul *ngFor = "let employee of employees">
                <li>{{employee.name}} {{employee.id}}</li>
            </ul>
            `,
})
export class EmployeeListComponent  {
     employees: any = [];

     constructor(private _employeeService:EmployeeService){
     }
     ngOnInit(): void {
         this._employeeService.getEmployees()
            .subscribe(resEmployeeData => this.employees = resEmployeeData)
            
     }    
}
