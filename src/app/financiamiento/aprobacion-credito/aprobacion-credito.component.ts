import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-aprobacion-credito',
  templateUrl: './aprobacion-credito.component.html',
  styleUrls: ['./aprobacion-credito.component.scss']
})
export class AprobacionCreditoComponent {
  @ViewChild(MatTabGroup) tabGroup: MatTabGroup;
  nombre:string
  telefono:any
  anno:any
  color:string = '#FFFFFF'

  siguientePaso(form: NgForm) {
    if (form.valid) {
      const indexSiguientePaso = this.tabGroup.selectedIndex + 1;
      this.tabGroup.selectedIndex = indexSiguientePaso;
    } else {
      // El formulario no es válido, puedes mostrar un mensaje o realizar otra acción
    }
  }


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
