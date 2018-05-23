import { Injectable } from '@angular/core';
import {ExpedienteSinpartes} from "../clases/expediente-sinpartes";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Mensaje} from "../clases/mensaje";

@Injectable()
export class PartesService {

  url = "http://localhost:3000/API/despacho";

  constructor( private http: HttpClient) { }

  addExpediente(nombre: string, apellido: string) {
    var datos = new HttpParams()
      .set('nombre', nombre)
      .set('apellido', apellido);
    return this.http.get<Mensaje>(this.url+"/partes/add",{params: datos}).map(res=>res);
  }



}
