import { Component } from '@angular/core';
import { ApiInventarioNuevosService } from 'src/app/services/api-inventario-nuevos.service';

@Component({
  selector: 'app-promocion-seminuevos',
  templateUrl: './promocion-seminuevos.component.html',
  styleUrls: ['./promocion-seminuevos.component.scss']
})
export class PromocionSeminuevosComponent {
  inventario:any

  constructor(private apiInventarioNuevosService: ApiInventarioNuevosService) { }

  ngOnInit() {
    this.apiInventarioNuevosService.getInventarioNuevos().then(
      (res: any) => {
        this.inventario = res.map(item => ({
          ...item,
          imagenBase64: 'data:image/png;base64,' + item.imagen,
        }));
      },
      (error) =>{
        console.error(error);
      }
    );
  }
}
