import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  totalVentas:number= 25.555555555555555555555;
  pocentajeVentas: number= 0.85;

  constructor() { }

  ngOnInit(): void {
  }

}
