import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './listaAlumnos/lista-alumnos/lista-alumnos.component';
import { AltaAlumnoComponent } from './altaAlumno/alta-alumno/alta-alumno.component';
import { DetalleAlumnoComponent } from './detalleAlumno/detalle-alumno/detalle-alumno.component';
import { EditarCalificacionAlumnoComponent } from './editarCalificacionAlumno/editar-calificacion-alumno/editar-calificacion-alumno.component';
import { AltaCalificacionAlumnoComponent } from './altaCalificacionAlumno/alta-calificacion-alumno/alta-calificacion-alumno.component';
import { ListaMateriasComponent } from './listaMaterias/lista-materias/lista-materias.component';
import { AltaMateriaComponent } from './altaMateria/alta-materia/alta-materia.component';

const routes: Routes = [
  { path: 'alumnos/listado', component: ListaAlumnosComponent },

  { path: 'alumnos/alta', component: AltaAlumnoComponent },
  { path: 'alumnos/detalle/:id', component: DetalleAlumnoComponent },
  { path: 'alumnos/calificacion/editar/:idReg/:idAlum/:idMat', component: EditarCalificacionAlumnoComponent },
  { path: 'alumnos/calificacion/alta/:idAlum', component: AltaCalificacionAlumnoComponent },

  { path: 'materias/listado', component: ListaMateriasComponent },
  { path: 'materias/alta', component: AltaMateriaComponent },
  { path: '', redirectTo: "/alumnos/listado", pathMatch: "full"},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
