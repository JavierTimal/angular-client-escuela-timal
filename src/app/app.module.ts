import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ListaAlumnosComponent } from './listaAlumnos/lista-alumnos/lista-alumnos.component';
import { AltaAlumnoComponent } from './altaAlumno/alta-alumno/alta-alumno.component';
import { DetalleAlumnoComponent } from './detalleAlumno/detalle-alumno/detalle-alumno.component';
import { EditarCalificacionAlumnoComponent } from './editarCalificacionAlumno/editar-calificacion-alumno/editar-calificacion-alumno.component';
import { AltaCalificacionAlumnoComponent } from './altaCalificacionAlumno/alta-calificacion-alumno/alta-calificacion-alumno.component';
import { ListaMateriasComponent } from './listaMaterias/lista-materias/lista-materias.component';
import { AltaMateriaComponent } from './altaMateria/alta-materia/alta-materia.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    AltaAlumnoComponent,
    DetalleAlumnoComponent,
    EditarCalificacionAlumnoComponent,
    AltaCalificacionAlumnoComponent,
    ListaMateriasComponent,
    AltaMateriaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
