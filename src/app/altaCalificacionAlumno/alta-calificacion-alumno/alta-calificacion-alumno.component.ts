import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestServiceService } from '../../restService/rest-service.service';

@Component({
  selector: 'app-alta-calificacion-alumno',
  templateUrl: './alta-calificacion-alumno.component.html',
  styleUrls: ['./alta-calificacion-alumno.component.css']
})
export class AltaCalificacionAlumnoComponent {
  @ViewChild("materia") materia!: ElementRef;
  @ViewChild('calif') calif!: ElementRef;

  public idAlum: number = 1;

  private sub: any;

  get alumno(){
    return this.restService.alumno;
  }

  get materias(){
    return this.restService.materias
  }

  constructor(private route: ActivatedRoute, private restService: RestServiceService) {
    this.sub = this.route.params.subscribe(params => {
      this.idAlum = +params['idAlum']; 
      console.log(this.idAlum);
      this.restService.obtenerListaMaterias();
      this.restService.obtenerAlumno(this.idAlum);
      //console.log(this.id);
      // In a real app: dispatch action to load the details here.
   });
   }

   altaCalificacion(): void {
    const materia: string = this.materia.nativeElement.value;
    const calif: string = this.calif.nativeElement.value;

    console.log(materia);
    console.log(calif);

    this.restService.altaCalificacion(this.idAlum, materia, calif, "");
   }

 

}
