import { Injectable } from '@angular/core';
import {Materiacivil} from "../clases/materiacivil";
import {HttpClient} from "@angular/common/http";
import "rxjs/Rx";

@Injectable()
export class DatosExpedientesService {

  url = "http://localhost:3000/API/despacho/juzgados";
  constructor(private http: HttpClient) { }

  getMaterias(){
    return this.http.get<Materiacivil[]>(this.url+"/materias").map(res=>res);
  }

  // getMateriasCiviles():Materiacivil[] {
  //   var listaMaterias = [
  //     {id: 1, tipo:"Civil"},
  //     {id: 2, tipo:"Familiar"},
  //     {id: 3, tipo:"Penal"}
  //     ];
  //   console.log(this.getMaterias());
  //   return listaMaterias;
  // }

  //getMateriasCiviles(){
    //console.log(this.http.get("http://localhost:3000/API/despacho/juzgados/materias"));
    // return this.http.get("http://localhost:3000/API/despacho/juzgados/materias");
    //return this.http.get("http://localhost:3000/API/despacho/juzgados/materias");
  //}

}
