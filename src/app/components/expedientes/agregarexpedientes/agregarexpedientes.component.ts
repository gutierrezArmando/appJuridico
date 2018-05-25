import { Component, OnInit } from '@angular/core';
import { DatosExpedientesService } from '../../../servicios/datos-expedientes.service';
import { Materiacivil } from '../../../clases/materiacivil';
import {Partidojudicial} from '../../../clases/partidojudicial';
import {Juzgado} from '../../../clases/juzgado';
import {Secretaria} from '../../../clases/secretaria';
import {ExpedienteSinpartes} from '../../../clases/expediente-sinpartes';
import {Mensaje} from '../../../clases/mensaje';

@Component({
  selector: 'app-agregarexpedientes',
  templateUrl: './agregarexpedientes.component.html',
  styleUrls: ['./agregarexpedientes.component.css']
})
export class AgregarexpedientesComponent implements OnInit {

  mensaje: Mensaje = new Mensaje();
  expediente: ExpedienteSinpartes = new ExpedienteSinpartes();
  materiaCivilArre: Materiacivil[];
  listaPartidos: Partidojudicial[];
  listaJuzgados: Juzgado[];
  listaSecretarias: Secretaria[];
  constructor(private expedienteServicio: DatosExpedientesService) {
    this.expedienteServicio.getMaterias().subscribe(materias => {
      this.materiaCivilArre = materias;
    });
    this.expedienteServicio.getPartidos().subscribe( partidos => {
      this.listaPartidos = partidos;
    });

  }

  ngOnInit() {
  }

  getListaJuzgados() {
    this.expedienteServicio.getJuzgados(this.expediente.materiaCivil, this.expediente.partidoJudicial).subscribe( juzgados => {
      this.listaJuzgados = juzgados;
    });
  }

  // materia: string, partido: string, juzgado: string
  getListaSecretarias() {
    this.expedienteServicio.getSecretarias(this.expediente.materiaCivil, this.expediente.partidoJudicial, this.expediente.juzgado)
      .subscribe( secretarias => {
      this.listaSecretarias = secretarias;
    });
  }


  agregarExpediente() {
    this.expedienteServicio.addExpediente(this.expediente).subscribe(res => {
      this.mensaje.msg = res['msg'];
      console.log(this.mensaje);
    });
  }

}

// https://stackoverflow.com/questions/46667671/angular-4-httpclient-cannot-sent-data-with-post
