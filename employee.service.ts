import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';

@Injectable()
export class EmployeeService{
    private _url:string= './apidata/employeedata.json';
    // private _url:string= 'event-details.component.html';
    constructor(private _http: Http){}
    
    getEmployees(){
        return this._http.get(this._url)
            .map((response:Response) => response.json());
    }
}

