import { Component } from '@angular/core';

@Component({
    selector:'my-bindings',
    template:`<h2>{{title}}</h2>
              <div [class.myClass]= "applyClass">Class Binding<div>`,
    styles:[`.myClass{
        color:red;
    }`]   
})
// Property binding

export class BindingsComponent{
    public title = "bindings demo2"
    public applyClass = true;
}