import { Component } from '@angular/core';

@Component({
  selector: 'app-refacciones-originales',
  templateUrl: './refacciones-originales.component.html',
  styleUrls: ['./refacciones-originales.component.scss']
})
export class RefaccionesOriginalesComponent {
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

  onInputChangeCP(event: any) {
    const inputValue = event.target.value;
    const maxLength = 5;

    if (inputValue.length > maxLength)
      event.target.value = inputValue.slice(0, maxLength)

    if (inputValue.length == maxLength)
      this.anno = event.target.value
  }
}
