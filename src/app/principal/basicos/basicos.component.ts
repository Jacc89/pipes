import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {
  nombre: string ='Alexandra';
  apellido:string = 'Castro';
  nombreCompleto: string = 'alexandra castro';
  fecha: Date =new Date;

  constructor() { }

  ngOnInit(): void {
  }

}
