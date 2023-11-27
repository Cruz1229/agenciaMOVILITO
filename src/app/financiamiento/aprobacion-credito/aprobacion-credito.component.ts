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

  siguientePaso(form: NgForm) {
    if (form.valid) {
      const indexSiguientePaso = this.tabGroup.selectedIndex + 1;
      this.tabGroup.selectedIndex = indexSiguientePaso;
    } else {
      // El formulario no es válido, puedes mostrar un mensaje o realizar otra acción
    }
  }
  
}
