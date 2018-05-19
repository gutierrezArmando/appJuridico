import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregarexpedientes',
  templateUrl: './agregarexpedientes.component.html',
  styleUrls: ['./agregarexpedientes.component.css']
})
export class AgregarexpedientesComponent implements OnInit {

  materiaCivilArre = ['CIVIL', 'PENAL', 'FAMILIAR', 'MERCANTIL'];

  constructor() { }

  ngOnInit() {
  }

  saludar(event: any) {
    console.log(event.target.value);
  }

}
