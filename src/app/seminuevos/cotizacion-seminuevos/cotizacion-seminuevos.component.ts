import { Component } from '@angular/core';

@Component({
  selector: 'app-cotizacion-seminuevos',
  templateUrl: './cotizacion-seminuevos.component.html',
  styleUrls: ['./cotizacion-seminuevos.component.scss']
})
export class CotizacionSeminuevosComponent {
  nombre:string
  telefono:any
  anno:any
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
