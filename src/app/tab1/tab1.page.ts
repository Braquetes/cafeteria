import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router) {}

  masaMami(){
    console.log('Masa Mami');
    this.router.navigate(['/menu',1]);
  }

  brufinca(){
    console.log('Brufinca');
    this.router.navigate(['/menu',2]);
  }

  almacen(){
    console.log('Almacen');
    this.router.navigate(['/menu',3]);
  }

}
