import { Component } from '@angular/core';
import { ApiInventarioNuevosService } from '../../services/api-inventario-nuevos.service';

@Component({
  selector: 'app-inventario-nuevos',
  templateUrl: './inventario-nuevos.component.html',
  styleUrls: ['./inventario-nuevos.component.scss']
})
export class InventarioNuevosComponent {
  inventarioNuevos:any

  constructor(private apiInventarioNuevosService: ApiInventarioNuevosService) { }

  ngOnInit() {
    this.apiInventarioNuevosService.getInventarioNuevos().then(
      (res: any) => {
        this.inventarioNuevos = res.map(item => ({
          ...item,
          imagenBase64: 'data:image/png;base64,' + item.imagen,  // Agrega la URL de la imagen en base64
        }));
      },
      (error) =>{
        console.error(error);
      }
    );
  }
}
