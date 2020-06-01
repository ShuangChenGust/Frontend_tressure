import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector:'simple',
    template:`You entered:{{simpleInput}}`,
})

export class SimpleComponent implements OnChanges{
    @Input() simpleInput:string;

    ngOnChanges(changes: SimpleChanges): void {
        for(let propertyName in changes){
            // console.log(changes);
            // console.log(propertyName);
            // console.log(changes[propertyName]);
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(propertyName+" : currentValue = "+current +" ,prev is " + previous)
        }
        
        
    }
    
}