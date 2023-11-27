import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InventarioNuevosComponent } from './autos-nuevos/inventario-nuevos/inventario-nuevos.component';
import { NuestrasMarcasComponent } from './autos-nuevos/nuestras-marcas/nuestras-marcas.component';
import { PruebaManejoComponent } from './autos-nuevos/prueba-manejo/prueba-manejo.component';
import { CotizacionComponent } from './autos-nuevos/cotizacion/cotizacion.component';
import { AutoCuentaComponent } from './autos-nuevos/auto-cuenta/auto-cuenta.component';
import { InventarioComponent } from './seminuevos/inventario/inventario.component';
import { PruebaManejoSeminuevosComponent } from './seminuevos/prueba-manejo-seminuevos/prueba-manejo-seminuevos.component';
import { CotizacionSeminuevosComponent } from './seminuevos/cotizacion-seminuevos/cotizacion-seminuevos.component';
import { AutoCuentaSeminuevosComponent } from './seminuevos/auto-cuenta-seminuevos/auto-cuenta-seminuevos.component';
import { PromocionNuevosComponent } from './promociones/promocion-nuevos/promocion-nuevos.component';
import { PromocionSeminuevosComponent } from './promociones/promocion-seminuevos/promocion-seminuevos.component';
import { PromocionServiciosComponent } from './promociones/promocion-servicios/promocion-servicios.component';
import { PostVentaComponent } from './servicios-refacciones/post-venta/post-venta.component';
import { RefaccionesOriginalesComponent } from './servicios-refacciones/refacciones-originales/refacciones-originales.component';
import { DepartamentoVentasComponent } from './financiamiento/departamento-ventas/departamento-ventas.component';
import { AprobacionCreditoComponent } from './financiamiento/aprobacion-credito/aprobacion-credito.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inventario-nuevos',
    component: InventarioNuevosComponent
  },
  {
    path: 'nuestras-marcas',
    component: NuestrasMarcasComponent
  },
  {
    path: 'prueba-manejo',
    component: PruebaManejoComponent
  },
  {
    path: 'cotizacion',
    component: CotizacionComponent
  },
  {
    path: 'auto-cuenta',
    component: AutoCuentaComponent
  },
  {
    path: 'inventario',
    component: InventarioComponent
  },
  {
    path: 'prueba-manejo-seminuevos',
    component: PruebaManejoSeminuevosComponent
  },
  {
    path: 'cotizacion-seminuevos',
    component: CotizacionSeminuevosComponent
  },
  {
    path: 'auto-cuenta-seminuevos',
    component: AutoCuentaSeminuevosComponent
  },
  {
    path: 'promocion-nuevos',
    component: PromocionNuevosComponent
  },
  {
    path: 'promocion-seminuevos',
    component: PromocionSeminuevosComponent
  },
  {
    path: 'promocion-servicios',
    component: PromocionServiciosComponent
  },
  {
    path: 'post-venta',
    component: PostVentaComponent
  },
  {
    path: 'refacciones-originales',
    component: RefaccionesOriginalesComponent
  },
  {
    path: 'departamento-ventas',
    component: DepartamentoVentasComponent
  },
  {
    path: 'aprobacion-credito',
    component: AprobacionCreditoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
