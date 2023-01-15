import { Component } from '@angular/core';
import { RestServiceService } from '../../restService/rest-service.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  get alumnos(){
    return this.restService.resultados;
  }
  constructor(private restService: RestServiceService) {
    this.restService.obtenerListaAlumnos();
   }

   detalle(id: String){
    //programar para que elimine a traves de la api
    console.log(id);
    //this.restService.obtenerAlumno(id);
    //this.miServicioInyectado.eliminarAerolinea(id);
  }

  editar(id: String){
    //programar para que elimine a traves de la api
    console.log(id);
    //this.restService.obtenerAlumno(id);
  }

  eliminar(id: String){
    //programar para que elimine a traves de la api
    console.log(id);
    this.restService.eliminarAlumno(id);
  }

 

}
