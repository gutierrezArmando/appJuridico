import { Component, OnInit } from '@angular/core';
import {PartesService} from '../../servicios/partes.service';
import {Mensaje} from '../../clases/mensaje';

@Component({
  selector: 'app-agregar-partes',
  templateUrl: './agregar-partes.component.html',
  styleUrls: ['./agregar-partes.component.css']
})
export class AgregarPartesComponent implements OnInit {

  mensaje = new Mensaje();
  nombre = '';
  apellido = '';
  constructor(private partesServicio: PartesService) { }

  ngOnInit() {
  }

  agregarParte() {
    if ( this.nombre === '' || this.apellido === '') {
      this.mensaje.msg = 'Error, falta uno o mas parámetros';
    } else {
      this.partesServicio.addExpediente(this.nombre, this.apellido).subscribe(res => {
        this.mensaje.msg = res['msg'];
        console.log(this.mensaje);
      });
    }
    // this.expedienteServicio.addExpediente(this.expediente).subscribe(res =>{
    //   this.mensaje = res;
    //   console.log(this.mensaje);
    // });
  }

}
