import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  id: number = 0;

  constructor(private router: Router, private AR: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.AR.snapshot.params['id'];

  }

  pedido(){
    console.log('Pedido');
    this.router.navigate(['/pedido-form', this.id]);
  }

  terminado(){
    console.log('Terminado');
    this.router.navigate(['/terminado', this.id]);
  }

}
