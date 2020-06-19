import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practCol1';
  name="Angel G"
  

  
  onSaludar(mensaje){ 
   console.log(mensaje);
  }
}
