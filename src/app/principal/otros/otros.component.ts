import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
  styleUrls: ['./otros.component.css']
})
export class OtrosComponent implements OnInit {
  nombre: string = "Alexandra";
  genero: string ="femenino";

  bienvenidoMapa = {
    'masculino': 'Bienvenido',
    'femenino': 'Bienvenida',
    
  }

  usuarios:string[] = [
    'Alexandra', 'CArlos',
    
  ]
  usuarioMapa={
    '-0': 'No hay usuarios conectados',
    '=1': 'hay 1 usuario conectado',
    '=2': 'hay 2 usuarios conectados',
    'other': 'hay  muchos usuarios conectados',

  }

  constructor() { }

  ngOnInit(): void {
  }

}
