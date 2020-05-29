import { Component } from '@angular/core';

@Component({
    selector:'my-training',
    template:`<h2>Child Component</h2>
    <h4>{{  title }}<h4>
    <img [src]="imgLink">
    <input type="text" value="Angular">`,

    styles:[`h4{
        color:red;
    }`]   
})
// Property binding

export class TrainingComponent{
    public title = "Header h5 from training component"
    public imgLink = "http://www.lorempixel.com/300/150/"
}