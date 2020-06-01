import { Component } from '@angular/core';

@Component({
    selector:'list-employee',
    templateUrl:`app/employeelist.component.html`,
    styleUrls:[]
})

export class EmployeeListComponent{
    employees:any[];

    constructor(){
        this.employees = [
            {
                code: '01', name: 'tom', gender:'Male', salary: 5000, DOB: '1125'
            },
            {
                code: '02', name: 'Dom', gender:'Female', salary: 6000, DOB: '1225'
            },
        ];
        
    }

    getEmployees(): void{
        this.employees = [
            {
                code: '01', name: 'tom', gender:'Male', salary: 5000, DOB: '1125'
            },
            {
                code: '02', name: 'Dom', gender:'Female', salary: 6000, DOB: '1225'
            },
            {
                code: '03', name: 'som', gender:'Female', salary: 26000, DOB: '0125'
            },
        ];
    }
    
    trackByEmpCode(index:number, employee:any):string
    {
        return employee.code
    }
}