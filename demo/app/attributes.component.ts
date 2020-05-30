import { Component } from '@angular/core';
@Component({
    selector:'my-attributes',
    template:`
    <h2>hi</h2>
    `,
    styles:[`.myClass{
        color:red;
    }`]   
})
export class AttributesComponent{
    public cone = true;
    public ctwo = true;
}