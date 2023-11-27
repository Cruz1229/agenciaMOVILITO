import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiInventarioNuevosService {

  constructor(private http: HttpClient) { }

  private URL = 'http://127.0.0.1:8000/api/nuevos'

  httpHeader = {
    headers: new HttpHeaders({ "Accept": "application/json" }),
  }

  getInventarioNuevos() {
    return this.http.get<any>(this.URL, { headers: { "Accept": "application/json" }})
        .toPromise()
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error
        });
  }

  getInventariosPorAnno(anio:any) {
    return this.http.get<any>(this.URL, { headers: { "Accept": "application/json" }})
        .toPromise()
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error
        });
  }
}
