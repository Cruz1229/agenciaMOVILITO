import { Component } from '@angular/core';

interface MARCAS {
  src:string
}

@Component({
  selector: 'app-nuestras-marcas',
  templateUrl: './nuestras-marcas.component.html',
  styleUrls: ['./nuestras-marcas.component.scss']
})
export class NuestrasMarcasComponent {
  
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
