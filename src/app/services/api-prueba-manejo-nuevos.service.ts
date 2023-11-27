import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiInventarioNuevosService } from './api-inventario-nuevos.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPruebaManejoNuevosService {
  anios:any

  constructor(private http: HttpClient, private apiInventarioNuevosService: ApiInventarioNuevosService) { }

  private URL = 'http://127.0.0.1:8000/api/pruebanuevos'

  httpHeader = {
    headers: new HttpHeaders({ "Accept": "application/json" }),
  }

  getAnios(): Promise<number[]> {
    return this.apiInventarioNuevosService.getInventarioNuevos().then(
      (res: any) => {
        return res.map((item: any) => item.anio);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  getMarcas(): Promise<string[]> {
    return this.apiInventarioNuevosService.getInventarioNuevos().then(
      (res: any) => {
        return res.map((item: any) => item.marca);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getMarcasPorAnio(anio:any): Promise<string[]> {
    return this.apiInventarioNuevosService.getInventariosPorAnno(anio).then(
      (res: any) => {
        return res.map((item: any) => item.marca);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getModelo(): Promise<string[]> {
    return this.apiInventarioNuevosService.getInventarioNuevos().then(
      (res: any) => {
        return res.map((item: any) => item.modelo);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getModeloPorAnio(anio:any): Promise<string[]> {
    return this.apiInventarioNuevosService.getInventariosPorAnno(anio).then(
      (res: any) => {
        return res.map((item: any) => item.modelo);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  public savePrueba(dataAux:any): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/pruebanuevos';

    const datas = {
      nombre: dataAux.nombre,
      apellidos: dataAux.apellidos,
      correo: dataAux.correo,
      telefono: dataAux.telefono,
      anio: dataAux.anio,
      marca: dataAux.marca,
      modelo: dataAux.modelo,
      fecha: dataAux.fecha,
      hora: dataAux.hora
    };

    console.log("data2: "+JSON.stringify(datas))

    return this.http.post<any>(url, datas);
  }
}
