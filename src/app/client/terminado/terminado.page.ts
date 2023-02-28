import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-terminado',
  templateUrl: './terminado.page.html',
  styleUrls: ['./terminado.page.scss'],
})
export class TerminadoPage implements OnInit {

  depto: string = '';

  constructor(private AR: ActivatedRoute) { }

  ngOnInit() {
    const id = this.AR.snapshot.params['id'];
    if(id == 1){
      this.depto = 'Masa Mami';
    }else if(id == 2){
      this.depto = 'Brufinca';
    }else{
      this.depto = 'Almacen';
    }
  }

}
