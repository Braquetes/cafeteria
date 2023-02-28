import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
    email: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
    password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(255)]],
  });

  constructor(private fb: FormBuilder, private router: Router, private AS: AuthService, private CS: CookieService) { }

  ngOnInit() {
    this.miFormulario.setValue({
      email: '',
      password: ''
    });
  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched;
  }

  save(){
    console.log(this.miFormulario.value);
    // this.router.navigate(['/tabs']);
    this.AS.login(this.miFormulario.value).subscribe((data: any) => {
      if(data.resultado === 'OK'){
        console.log(data);
        this.CS.set('email', data.email);
        this.CS.set('nombreCompleto', data.nombreCompleto);
        this.CS.set('idArea', data.idArea);
        if(data.idArea == 1){
          this.router.navigate(['/home']);
        }
        if(data.idArea == 2 || data.idArea == 3 || data.idArea == 4){
          this.router.navigate(['/tabs']);
        }
      }
    });
  }
}
