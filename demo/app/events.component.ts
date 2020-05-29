import { Component } from '@angular/core';

@Component({
    selector:'my-events',
    template:`<h2>events demo</h2>
             <input type="text" #demoInput >  
             <button (click)="onClick(demoInput.value)">Click Me</button>
             <br>
             <button (mouseover)="onClick($event)">Mouse overme</button>
             <br>
             <input type="text" [(ngModel)]="fname" />
             <input type="text" [(ngModel)]="lname" />  
             <br>
             FullName: {{fname}} {{lname}}
             `,
    styles:[``]   
})

export class EventsComponent{
    onClick(value){
        console.log('button Clicked');
        console.log(value);
    }
    public fname;
    public lname;    
}


// export class EventsComponent{
//     onClick(value){
//         console.log('button Clicked');
//         console.log(value);
//     }
//     public fname;
//     public lname;
// }