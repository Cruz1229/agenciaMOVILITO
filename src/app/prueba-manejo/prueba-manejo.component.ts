import { Component } from '@angular/core';


@Component({
  selector: 'app-prueba-manejo',
  templateUrl: './prueba-manejo.component.html',
  styleUrls: ['./prueba-manejo.component.scss']
})
export class PruebaManejoComponent {
  nombre:string
  apellidos:string
  correo:string
  telefono:any
  anno:any
  marca:string
  modelo:string
  fecha:any
  hora:any
  
  guardarDAtos(event:any) {
    console.log(event)
  }

  color:string = '#FFFFFF'

  onInputChange(event: any) {
    const inputValue = event.target.value;
    const maxLength = 10;

    if (inputValue.length > maxLength)
      event.target.value = inputValue.slice(0, maxLength)

    if (inputValue.length == maxLength)
      this.telefono = event.target.value
  }

  onInputChangeYear(event: any) {
    const inputValue = event.target.value;
    const maxLength = 4;

    if (inputValue.length > maxLength)
      event.target.value = inputValue.slice(0, maxLength)

    if (inputValue.length == maxLength)
      this.anno = event.target.value
  }

}
