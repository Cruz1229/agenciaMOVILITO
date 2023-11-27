import { Component } from '@angular/core';
import { ApiPruebaManejoNuevosService } from 'src/app/services/api-prueba-manejo-nuevos.service';


@Component({
  selector: 'app-prueba-manejo',
  templateUrl: './prueba-manejo.component.html',
  styleUrls: ['./prueba-manejo.component.scss']
})
export class PruebaManejoComponent {
  selectedAnio:any;
  selectedModel:any
  selectedMarc:any
  anios:any
  marcas:any
  modelos:any
  nombre:string
  apellidos:string
  correo:string
  telefono:any
  anno:any
  anio:any
  marca:string
  modelo:string
  fecha:any
  hora:any

  constructor(private apiPruebaManejoNuevos: ApiPruebaManejoNuevosService){}
  
  ngOnInit() {
    this.apiPruebaManejoNuevos.getAnios().then(
      (res: number[]) => {
        this.anios = res;
      },
      (error) => {
        console.error(error);
      }
    );
    this.apiPruebaManejoNuevos.getMarcas().then(
      (res: string[]) => {
        this.marcas = res;
      },
      (error) => {
        console.error(error);
      }
    );
    this.apiPruebaManejoNuevos.getModelo().then(
      (res: string[]) => {
        this.modelos = res;
      },
      (error) => {
        console.error(error);
      }
    );
  }  



  color:string = '#FFFFFF'

  onInputChange(event: any) {
    const inputValue = event.target.value;
    const maxLength = 10;

    if (inputValue.length > maxLength)
      event.target.value = inputValue.slice(0, maxLength)

    if (inputValue.length == maxLength)
      this.telefono = event.target.value
  }

  onInputChangeYear(event: any) {
    const inputValue = event.target.value;
    const maxLength = 4;

    if (inputValue.length > maxLength)
      event.target.value = inputValue.slice(0, maxLength)

    if (inputValue.length == maxLength)
      this.anno = event.target.value
  }

  onAnioChange(selectedValue: any) {
    this.apiPruebaManejoNuevos.getMarcasPorAnio(selectedValue).then(
      (res: string[]) => {
        this.marcas = res;
      },
      (error) => {
        console.error(error);
      }
    );

    this.apiPruebaManejoNuevos.getModeloPorAnio(selectedValue).then(
      (res: string[]) => {
        this.modelos = res;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onInputName(event: any) {
    this.nombre = event.target.value
  }

  onInputApellido(event: any) {
    this.apellidos = event.target.value
  }

  onInputCorreo(event: any) {
    this.correo = event.target.value
  }

  onInputAnio(event: any) {
    this.anio = event.target.value
  }

  onInputMarca(event: any) {
    this.marca = event.target.value
  }

  onInputModelo(event: any) {
    this.modelo = event.target.value
  }

  onInputFecha(event: any) {
    this.fecha = event.target.value
  }

  onInputHora(event: any) {
    this.hora = event.target.value
  }

  eviarDatos() {
    const data = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      correo: this.correo,
      telefono: this.telefono,
      anio: this.anio,
      marca: this.marca,
      modelo: this.modelo,
      fecha: this.fecha,
      hora: this.hora
    };

    console.log(JSON.stringify(data))

    /* try {
      console.log("repsosne")
      this.apiPruebaManejoNuevos.savePrueba(data).subscribe((response: any) => {
        console.log(response);
        return true
      });
    } catch (error) {
      console.error("error: " + error)
      return false
    } */
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      event.target.complete()
    }, 2000);
  }

}
