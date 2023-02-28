import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: any;

  constructor(private CS: CookieService) { }

  ngOnInit() {
    this.usuario = {
      nombres: this.CS.get('nombreCompleto'),
      email: this.CS.get('email'),
      idArea: this.CS.get('idArea'),
      password: '********'
    };
  }

}
