import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    username: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(255)]]
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.miFormulario.setValue({
      username: ''
    });
  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched;
  }

  save(){
    console.log(this.miFormulario.value);
    this.router.navigate(['/restore']);
  }

}
