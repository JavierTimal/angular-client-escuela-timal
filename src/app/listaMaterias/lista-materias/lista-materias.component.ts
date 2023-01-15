import { Component } from '@angular/core';
import { RestServiceService } from '../../restService/rest-service.service';

@Component({
  selector: 'app-lista-materias',
  templateUrl: './lista-materias.component.html',
  styleUrls: ['./lista-materias.component.css']
})
export class ListaMateriasComponent {

  get materias(){
    return this.restService.materias;
  }
  constructor(private restService: RestServiceService) {
    this.restService.obtenerListaMaterias();
   }

   eliminar(id: String){
    //programar para que elimine a traves de la api
    console.log(id);
    this.restService.eliminarMateria(id);
  }

  
}
