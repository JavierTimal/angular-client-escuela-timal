import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestServiceService } from '../../restService/rest-service.service';

@Component({
  selector: 'app-editar-calificacion-alumno',
  templateUrl: './editar-calificacion-alumno.component.html',
  styleUrls: ['./editar-calificacion-alumno.component.css']
})
export class EditarCalificacionAlumnoComponent {
  @ViewChild("calif") calif!: ElementRef;

  public idReg: string = "";
  public idAlum: string = "";
  public idMat: string = "";

  private sub: any;

  get calificacion(){
    return this.restService.calificacion;
  }
  constructor(private route: ActivatedRoute, private restService: RestServiceService) {
    this.sub = this.route.params.subscribe(params => {
      this.idReg = params['idReg']; 
      this.idAlum = params['idAlum']; 
      this.idMat = params['idMat'];
      console.log(this.idReg);
      console.log(this.idAlum);
      console.log(this.idMat)  
      this.restService.obtenerCalificacion(this.idReg)
      //console.log(this.id);
      // In a real app: dispatch action to load the details here.
   });

   }

   actualizarCalificacion() : void {
    const calificacionNueva: string = this.calif.nativeElement.value;
    this.restService.actualizarCalificacion(this.idReg, this.idAlum, this.idMat, calificacionNueva, "");
   }

 
}
