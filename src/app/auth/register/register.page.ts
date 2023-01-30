import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  emailCheck= '^[a-z0-9._*+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$';

  emailReq(){
    return this.miFormulario.controls['username']?.errors?.['required'] &&
          this.miFormulario.controls['username']?.touched;
  }

  emailPattern(){
    return this.miFormulario.controls['username']?.errors?.['pattern'] &&
          this.miFormulario.controls['username']?.touched;
  }

  miFormulario: FormGroup = this.fb.group({
    nombres: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
    area: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
    username: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
    password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(255)]],
    telefono: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    // edad: ['',[Validators.required, Validators.min(1), Validators.max(100)]],
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.miFormulario.setValue({
      nombres: '',
      area: '',
      username: '',
      password: '',
      telefono: '',
      // edad: ''
    });
  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched;
  }

  save(){
    console.log(this.miFormulario.value);
    
  }

}
