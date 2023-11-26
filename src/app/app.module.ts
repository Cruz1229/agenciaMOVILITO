import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './components/content/content.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component'
import { NgImageSliderModule } from 'ng-image-slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InventarioNuevosComponent } from './autos-nuevos/inventario-nuevos/inventario-nuevos.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from  '@angular/common/http';
import { NuestrasMarcasComponent } from './autos-nuevos/nuestras-marcas/nuestras-marcas.component';
import { PruebaManejoComponent } from './autos-nuevos/prueba-manejo/prueba-manejo.component';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    ToolbarComponent,
    InventarioNuevosComponent,
    NuestrasMarcasComponent,
    PruebaManejoComponent,
    CotizacionComponent,
    AutoCuentaComponent,
    InventarioComponent,
    PruebaManejoSeminuevosComponent,
    CotizacionSeminuevosComponent,
    AutoCuentaSeminuevosComponent,
    PromocionNuevosComponent,
    PromocionSeminuevosComponent,
    PromocionServiciosComponent,
    PostVentaComponent,
    RefaccionesOriginalesComponent,
    DepartamentoVentasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    NgImageSliderModule,
    MatButtonModule, 
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
