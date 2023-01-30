import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  usuario = {
    nombres: 'Diego',
    apellidos: 'Hernandez',
    username: 'diego@gmail.com',
    password: '********',
    telefono: '9511976397',
    edad: 21
  };

  constructor() {}

}
