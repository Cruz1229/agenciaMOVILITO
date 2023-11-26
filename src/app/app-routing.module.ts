import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InventarioNuevosComponent } from './inventario-nuevos/inventario-nuevos.component';
import { NuestrasMarcasComponent } from './nuestras-marcas/nuestras-marcas.component';
import { PruebaManejoComponent } from './prueba-manejo/prueba-manejo.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
