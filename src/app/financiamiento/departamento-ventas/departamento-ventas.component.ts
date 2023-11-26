import { Component } from '@angular/core';

interface MARCAS {
  src:string
}

@Component({
  selector: 'app-departamento-ventas',
  templateUrl: './departamento-ventas.component.html',
  styleUrls: ['./departamento-ventas.component.scss']
})
export class DepartamentoVentasComponent {

  images:MARCAS[] = [
    {
      "src":"./assets/img/chevrolet.png"
    },
    {
      "src":"./assets/img/honda.png"
    },
    {
      "src":"./assets/img/Hyundai.png"
    },
    {
      "src":"./assets/img/kn.png"
    },
    {
      "src":"./assets/img/MG.png"
    },
    {
      "src":"./assets/img/Mitsubishi.png"
    },
    {
      "src":"./assets/img/nissan.png"
    },
    {
      "src":"./assets/img/toyota.png"
    },
  ]

}
