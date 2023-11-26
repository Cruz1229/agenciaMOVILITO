import { Component } from '@angular/core';
import { ApiInventarioNuevosService } from 'src/app/services/api-inventario-nuevos.service';

@Component({
  selector: 'app-promocion-nuevos',
  templateUrl: './promocion-nuevos.component.html',
  styleUrls: ['./promocion-nuevos.component.scss']
})
export class PromocionNuevosComponent {
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
