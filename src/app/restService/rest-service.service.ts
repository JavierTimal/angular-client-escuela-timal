import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  public resultados: any[] = [];
  public materias: any[] = [];
  public alumno: any;
  public calificacion: any;
  constructor(public httpClient: HttpClient, public router: Router) { }

  obtenerListaAlumnos(){
    //hacemos la peticion de tipo http get para consumir nuestra api de spring boot
    this.httpClient.get("https://api-rest-escuela-vobo.herokuapp.com/api/alumnos", {observe: "response"})
      .subscribe((respuesta : any) =>  {
        this.resultados = respuesta.body.contenido;
        console.log(respuesta.body.contenido);
      });
  }
  

  obtenerListaMaterias(){
    //hacemos la peticion de tipo http get para consumir nuestra api de spring boot
    this.httpClient.get("https://api-rest-escuela-vobo.herokuapp.com/api/materias", {observe: "response"})
      .subscribe((respuesta : any) =>  {
        this.materias = respuesta.body.contenido;
        console.log(respuesta.body.contenido);
      });
  }

  obtenerAlumno(id: number){
    //hacemos la peticion de tipo http get para consumir nuestra api de spring boot
    this.httpClient.get("https://api-rest-escuela-vobo.herokuapp.com/api/alumnos/" + id, {observe: "response"})
      .subscribe((respuesta : any) =>  {
        this.alumno = respuesta.body;
        console.log(respuesta.body);
      });
  }

  obtenerCalificacion(idReg: String){
    //hacemos la peticion de tipo http get para consumir nuestra api de spring boot
    this.httpClient.get("https://api-rest-escuela-vobo.herokuapp.com/api/calificaciones/" + idReg, {observe: "response"})
      .subscribe((respuesta : any) =>  {
        this.calificacion = respuesta.body;
        console.log(respuesta.body);
      });
  }

  GuardarAlumno(nombre: string, apPat: string, apMat: string, activo: string){
    const headers= new HttpHeaders()
      .set('Authorization','Basic YWRtaW46YWRtaW4=');
    this.httpClient.post("https://api-rest-escuela-vobo.herokuapp.com/api/alumnos", {
      nombre: nombre, ap_paterno: apPat,  ap_materno: apMat, activo: activo
    }, {headers: headers, observe: "response"}).subscribe((resp: any) => {
      console.log(resp);
        this.router.navigate(["/alumnos/listado"])
    });
  }

  GuardarMateria(nombre: string, activo: string){
    const headers= new HttpHeaders()
      .set('Authorization','Basic YWRtaW46YWRtaW4=');
    this.httpClient.post("https://api-rest-escuela-vobo.herokuapp.com/api/materias", {
      nombre: nombre, activo: activo
    }, {headers: headers, observe: "response"}).subscribe((resp: any) => {
      console.log(resp);
        this.router.navigate(["/materias/listado"])
    });
  }

  altaCalificacion(idAlum: number, materia: string, calif: string, fecha: string){
    const headers= new HttpHeaders()
      .set('Authorization','Basic YWRtaW46YWRtaW4=');
    this.httpClient.post("https://api-rest-escuela-vobo.herokuapp.com/api/calificaciones", {
      alumno: idAlum, materia: materia,  calificacion: calif, fechaRegistro: fecha
    }, {headers: headers, observe: "response"}).subscribe((resp: any) => {
      console.log(resp);
      Swal.fire({
        title: resp.body.msg,
        //type: "success",
        //showDenyButton: true,
        //showCancelButton: true,
        confirmButtonText: 'Ok',
        //denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.router.navigate(["/alumnos/detalle", idAlum])
        } 
      })
      
    });
  }

  actualizarCalificacion(idReg: string, idAlum: string, idMat: string, calificacionNueva: string, fecha: string){
    const headers= new HttpHeaders()
      .set('Authorization','Basic YWRtaW46YWRtaW4=');
    this.httpClient.put("https://api-rest-escuela-vobo.herokuapp.com/api/calificaciones/" + idReg, {
      id: idReg, alumno: idAlum,  materia: idMat, calificacion: calificacionNueva, fechaRegistro: fecha
    }, {headers: headers, observe: "response"}).subscribe((resp: any) => {
      console.log(resp);
        //this.router.navigate(["/alumnos/listado"])
        Swal.fire({
          title: resp.body.msg,
          //type: "success",
          //showDenyButton: true,
          //showCancelButton: true,
          confirmButtonText: 'Ok',
          //denyButtonText: `Don't save`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.router.navigate(["/alumnos/detalle", idAlum])
          } 
        })
    });

    

  }

  eliminarAlumno(id: String){
    const headers= new HttpHeaders()
      .set('Authorization','Basic YWRtaW46YWRtaW4=');
    this.httpClient.delete("https://api-rest-escuela-vobo.herokuapp.com/api/alumnos/" + id, {headers: headers, observe: "response"})
      .subscribe((respuesta: any) => {
        console.log(respuesta.body);
        //this.obtenerListaAlumnos();
        Swal.fire({
          title: respuesta.body.message,
          //type: "success",
          //showDenyButton: true,
          //showCancelButton: true,
          confirmButtonText: 'Ok',
          //denyButtonText: `Don't save`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.obtenerListaAlumnos();
          } 
        })
      })
  }

  eliminarMateria(id: String){
    const headers= new HttpHeaders()
      .set('Authorization','Basic YWRtaW46YWRtaW4=');
    this.httpClient.delete("https://api-rest-escuela-vobo.herokuapp.com/api/materias/" + id, {headers: headers, observe: "response"})
      .subscribe((respuesta: any) => {
        console.log(respuesta.body);
        //this.obtenerListaAlumnos();
        Swal.fire({
          title: respuesta.body.message,
          //type: "success",
          //showDenyButton: true,
          //showCancelButton: true,
          confirmButtonText: 'Ok',
          //denyButtonText: `Don't save`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.obtenerListaMaterias();
          } 
        })
      })
  }

  eliminarCalificacion(idReg: String, idAlumno: number){
    const headers= new HttpHeaders()
      .set('Authorization','Basic YWRtaW46YWRtaW4=');
    this.httpClient.delete("https://api-rest-escuela-vobo.herokuapp.com/api/calificaciones/" + idReg, {headers: headers, observe: "response"})
      .subscribe((respuesta: any) => {
        console.log(respuesta.body);
        //this.obtenerListaAlumnos();
        Swal.fire({
          title: respuesta.body.msg,
          //type: "success",
          //showDenyButton: true,
          //showCancelButton: true,
          confirmButtonText: 'Ok',
          //denyButtonText: `Don't save`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.obtenerAlumno(idAlumno)
          } 
        })
      })
  }
}
