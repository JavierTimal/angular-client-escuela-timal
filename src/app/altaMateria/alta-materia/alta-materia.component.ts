import { Component, ViewChild, ElementRef } from '@angular/core';
import { RestServiceService } from '../../restService/rest-service.service';

@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css']
})
export class AltaMateriaComponent {

  @ViewChild("nombre") nombre!: ElementRef;
  @ViewChild('activo') activo!: ElementRef;

  constructor(private restService: RestServiceService) { }

  Guardar(): void {
    const nombre: string = this.nombre.nativeElement.value;
    const activo: string = this.activo.nativeElement.value;
    this.restService.GuardarMateria(nombre, activo);
  }

 
}
