import { Component, OnInit } from '@angular/core';
import {PartesService} from "../../servicios/partes.service";
import {Mensaje} from "../../clases/mensaje";

@Component({
  selector: 'app-agregar-partes',
  templateUrl: './agregar-partes.component.html',
  styleUrls: ['./agregar-partes.component.css']
})
export class AgregarPartesComponent implements OnInit {

  mensaje = new Mensaje();
  constructor(private partesServicio: PartesService) { }

  ngOnInit() {
  }

  agregarParte(nombre: HTMLInputElement, apellido: HTMLInputElement){
    this.partesServicio.addExpediente(nombre.value, apellido.value).subscribe(res=>{
      this.mensaje = res;
      console.log(this.mensaje);
    });
    // this.expedienteServicio.addExpediente(this.expediente).subscribe(res =>{
    //   this.mensaje = res;
    //   console.log(this.mensaje);
    // });
  }

}
