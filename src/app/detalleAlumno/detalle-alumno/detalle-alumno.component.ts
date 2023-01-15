import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestServiceService } from '../../restService/rest-service.service';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.css']
})
export class DetalleAlumnoComponent {
  public id: number = 1;
  private sub: any;

  get alumno(){
    return this.restService.alumno;
  }
  constructor(private route: ActivatedRoute, private restService: RestServiceService) { 
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.restService.obtenerAlumno(this.id)
      console.log(this.id);
   });
  }

  eliminarCalificacion(idReg: String){
    //programar para que elimine a traves de la api
    console.log(idReg);
    this.restService.eliminarCalificacion(idReg, this.id);
  }

 

}
