import { NgModule} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

//components configured with routing

import { EmployeeListComponent } from './employee-list.component';
import { EventDetailsComponent } from './event-details.component';

const routes: Routes = [
    {path:'EmployeeList', component:EmployeeListComponent},
    {path:'EventDetails', component:EventDetailsComponent},
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{};
export const routingComponents = [EmployeeListComponent, EventDetailsComponent]