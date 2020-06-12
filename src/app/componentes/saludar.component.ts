import {Component, Input, Output, EventEmitter} from '@angular/core';
import { timeStamp } from 'console';

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
    constructor(){
    }

    onClick(){
        this.saludar.emit('Hola!!');
    }
}