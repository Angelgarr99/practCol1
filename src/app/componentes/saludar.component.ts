import {Component, Input, Output, EventEmitter} from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { element } from 'protractor';

@Component(
    {
        selector: 'saludar-app',
        templateUrl: './saludar.component.html',
        styleUrls:['./saludar.component.css'] 
    }
)
export class saludarComponent{
    @Input() nombre:string;
    @Output() saludar: EventEmitter<string>= new EventEmitter<string>();

    public nombres: Array<string>=[]; 
    public nombreLista:string="";
    constructor(){
    }

    onClick(){
        this.saludar.emit('Hola!!');
    }


    onButtonClick(){
        this.nombres.push(this.nombreLista);
        this.nombreLista='';
        console.log(this.nombres);
    }
}