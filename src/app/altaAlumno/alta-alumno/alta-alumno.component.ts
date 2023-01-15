import { Component, ElementRef, ViewChild } from '@angular/core';
import { RestServiceService } from '../../restService/rest-service.service';

@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.css']
})
export class AltaAlumnoComponent {

  @ViewChild("nombre") nombre!: ElementRef;
  @ViewChild('apPat') apPat!: ElementRef;
  @ViewChild('apMat') apMat!: ElementRef;
  @ViewChild('activo') activo!: ElementRef;
  constructor(private restService: RestServiceService) { }

  Guardar(): void {
    const nombre: string = this.nombre.nativeElement.value;
    const apPat: string = this.apPat.nativeElement.value;
    const apMat: string = this.apMat.nativeElement.value;
    const activo: string = this.activo.nativeElement.value;
    this.restService.GuardarAlumno(nombre, apPat, apMat, activo);
  }

}
