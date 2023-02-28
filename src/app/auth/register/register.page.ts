import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  emailCheck= '^[a-z0-9._*+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$';

  emailReq(){
    return this.miFormulario.controls['email']?.errors?.['required'] &&
          this.miFormulario.controls['email']?.touched;
  }

  emailPattern(){
    return this.miFormulario.controls['email']?.errors?.['pattern'] &&
          this.miFormulario.controls['email']?.touched;
  }

  miFormulario: FormGroup = this.fb.group({
    nombres: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
    area: ['',[Validators.required  ]],
    email: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
    password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(255)]],
    telefono: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    // edad: ['',[Validators.required, Validators.min(1), Validators.max(100)]],
  });

  constructor(private fb: FormBuilder, private router: Router, private AS: AuthService) { }

  ngOnInit() {
    this.miFormulario.setValue({
      nombres: '',
      area: '',
      email: '',
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
    this.AS.registro(this.miFormulario.value).subscribe((data: any) => {
      console.log(data);
      
    });
  }

}
