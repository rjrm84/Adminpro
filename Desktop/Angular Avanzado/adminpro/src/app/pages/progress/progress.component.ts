import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [],
})
export class ProgressComponent implements OnInit {
  progreso1 = 20;
  progreso2 = 50;

  constructor() {}

  ngOnInit() {}

  // actualizar( event: number ) {
  //   console.log('Evento:', event );
  // }

  //   cambiarValor( valor: number ) {
  //  this.progreso = this.progreso + valor;
  //  if ( this.progreso >= 100) {
  //  this.progreso = 100;
  //  return;
  //  }
  //  if ( this.progreso <= 0) {
  //  this.progreso = 0;
  //  return;
  //  }
  //  }
}
