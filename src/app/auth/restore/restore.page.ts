import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.page.html',
  styleUrls: ['./restore.page.scss'],
})
export class RestorePage implements OnInit {

  passReq(){
    return this.miFormulario.controls['confirmPassword']?.errors?.['required'] &&
           this.miFormulario.controls['confirmPassword']?.touched && 
           this.miFormulario.controls['contraseña']?.touched;
  }

  matchPass(ctrl: FormControl){
    const pass = ctrl.get('password')?.value;
    const confirmPass = ctrl.get('confirmPassword')?.value;
    if(pass != confirmPass){
      ctrl.get('confirmPassword')?.setErrors({cpass: true});
    }
  }

  miFormulario: FormGroup = this.fb.group({
    password: ['',[Validators.required, Validators.minLength(8)]],
    confirmPassword: ['',[Validators.required]]},{
    validators: this.matchPass
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.miFormulario.setValue({
      password: '',
      confirmPassword: ''
    });
  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched;
  }

  save(){
    console.log(this.miFormulario.value);
    this.router.navigate(['/login']);
  }
}