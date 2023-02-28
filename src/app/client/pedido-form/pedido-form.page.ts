import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/providers/client.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.page.html',
  styleUrls: ['./pedido-form.page.scss'],
})
export class PedidoFormPage implements OnInit {

  depto: string = '';
  productos: any;

  constructor(private AR: ActivatedRoute, private ClientS: ClientService) { }

  ngOnInit() {
    const id = this.AR.snapshot.params['id'];
    if(id == 1){
      this.depto = 'Masa Mami';
      this.getProductos(id);
    }else if(id == 2){
      this.depto = 'Brufinca';
    }else{
      this.depto = 'Almacen';
    }
  }

  getProductos(id: number){
    this.ClientS.getProductos(id).subscribe((data: any) => {
      console.log(data);
      let i = 0;
      for( const val of data){
        console.log(val);
        console.log(i);
        data[i].cantidad = val.surtida-val.existencia;
        data[i].total = val.precio * (val.surtida-val.existencia);
        console.log(data[i].cantidad);
        i++
      }
      this.productos = data;
    });
  }


  miForm(form: NgForm,id: number){
    console.log(form.value);
    this.productos[id].total = this.productos[id].precio * form.value.cantidad;
  }

}
