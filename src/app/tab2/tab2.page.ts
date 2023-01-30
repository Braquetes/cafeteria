import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // Creamos array con los meses del año
  meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  // Creamos array con los días de la semana
  dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  // Creamos el objeto fecha instanciándolo con la clase Date
  fecha = new Date();

  noti: any;

  notificacion = [
    {
      titulo: 'Fecha de pago',
      descripcion: '',
      fecha: 1673745180000
    },
    {
      titulo: 'Tu pago fue validado',
      descripcion: '',
      fecha: 1673745180000

    }
  ];

  constructor() {
    for(const val of this.notificacion){
      console.log(JSON.stringify(val.fecha));
      
      // console.log(this.dias_semana[this.fecha.getDay()] + ', ' + this.fecha.getDate() + ' de ' + this.meses[this.fecha.getMonth()] + ' de ' + this.fecha.getUTCFullYear());
    }
  }


}
