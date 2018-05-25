import { Injectable } from '@angular/core';
import {Materiacivil} from '../clases/materiacivil';
import {HttpClient, HttpParams} from '@angular/common/http';
import 'rxjs/Rx';
import {Partidojudicial} from '../clases/partidojudicial';
import {Juzgado} from '../clases/juzgado';
import {Secretaria} from '../clases/secretaria';
import {ExpedienteSinpartes} from '../clases/expediente-sinpartes';
import {Mensaje} from '../clases/mensaje';

@Injectable()
export class DatosExpedientesService {

  url = 'http://localhost:3000/API/despacho';
  headers: any;
  constructor(private http: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  getMaterias() {
    return this.http.get<Materiacivil[]>(this.url + '/juzgados/materias').map(res => res);
  }

  getPartidos() {
    return this.http.get<Partidojudicial[]>(this.url + '/juzgados/partidos').map(res => res);
  }

  getJuzgados(idMateria: String, idPartidoJudicial: String) {
    return this.http.get<Juzgado[]>(this.url + '/juzgados/juzgado/' + idMateria + '/' + idPartidoJudicial).map(res => res);
  }

  getSecretarias(materia: string, partido: string, juzgado: string) {

    const datos = new HttpParams()
      .set('materia', materia)
      .set('partido', partido)
      .set('juzgado', juzgado);

    return this.http.get<Secretaria[]>(this.url + '/juzgados/secretaria/', {params: datos}).map(res => res);
    // return this.http.get<Secretaria[]>(this.url+"/secretaria/" + idJuzgado).map(res=>res);
  }
  // datos.numero,
  // datos.anio,
  // datos.tipo,
  // datos.clave,
  // datos.materia,
  // datos.partido,
  // datos.juzgado,
  // datos.secretaria

  // addExpediente(expedienteSinParte: ExpedienteSinpartes) {
  //   let datos = new HttpParams()
  //     .set('numero', expedienteSinParte.numero)
  //     .set('anio', expedienteSinParte.anio.toString())
  //     .set('tipo', expedienteSinParte.tipoJuicio)
  //     .set('clave', expedienteSinParte.clavebusqueda)
  //     .set('materia', expedienteSinParte.materiaCivil)
  //     .set('partido', expedienteSinParte.partidoJudicial)
  //     .set('juzgado', expedienteSinParte.juzgado)
  //     .set('secretaria', expedienteSinParte.secretaria);
  //   return this.http.get<Mensaje>(this.url + '/expedientes/add', {params: datos}).map(res => res);
  // }

  addExpediente(expedientesSinParte: ExpedienteSinpartes) {
    return this.http.post(this.url + '/expedientes/add', expedientesSinParte, this.headers ).map( res => res);
  }


}
