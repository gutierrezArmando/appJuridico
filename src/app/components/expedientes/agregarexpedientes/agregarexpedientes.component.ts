import { Component, OnInit } from '@angular/core';
import { DatosExpedientesService } from "../../../servicios/datos-expedientes.service";
import { Materiacivil } from "../../../clases/materiacivil";

@Component({
  selector: 'app-agregarexpedientes',
  templateUrl: './agregarexpedientes.component.html',
  styleUrls: ['./agregarexpedientes.component.css']
})
export class AgregarexpedientesComponent implements OnInit {

  materiaCivilArre: Materiacivil[];

  constructor(private expedienteServicio: DatosExpedientesService) {
    this.expedienteServicio.getMaterias().subscribe(materias=>{
      this.materiaCivilArre = materias;
    })
    //this.materiaCivilArre = expedienteServicio.getMateriasCiviles();
  }

  ngOnInit() {
  }

  saludar(event: any) {
    console.log(event.target.value);
  }

}
