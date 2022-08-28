import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/domain/models/User/userlogin';
import { UserUseCase } from 'src/app/domain/usecase/userusecase';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  // usuario: String = "avargas@sispos.com";
  // password: String = "12345678";
  public validationMessages = {
    email: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'email', message: 'Solo se permiten emails' }
    ],
    password: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'minlength', message: 'Este campo debe de tener minimo 6 caracteres' },
    ]
  }
  response$: any;
  constructor(
    private _userUseCase: UserUseCase,
    private formBuilder: FormBuilder,
    private router: Router,
    // private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    })
  }
  public get f() { return this.loginForm.controls } //Funcion q retorna los controles del formulario

  login() {
    if (this.loginForm.valid) {
      var email = this.loginForm.controls['email'].value;
      var password = this.loginForm.controls['password'].value;

      var userLogin: UserLogin =
      {
        email: email, password: password
      };

      // this.response$ = this._userUseCase.login(userLogin);
      this.response$ = this._userUseCase.login(email, password);

      this.response$.subscribe((data: any) => {
        if (data) {
          console.log('data', data);

          localStorage.setItem('token', data.response.token);
          // localStorage.setItem('role', data.response.role);
          this.router.navigate(['default/home']);
          return;
        }
        this.fireSuccessSwal('Error', email + ' no es un usuario autorizado', 'error', 'bad')
        return
      });
    }
    else {
      this.fireSuccessSwal('Error', 'login fallido verifique los campos', 'error', 'bad')
    }
  }

  fireSuccessSwal(title: string, text: string, icon: string, confirmButton: string) {
    switch (icon) {
      case 'success':
        Swal.fire({
          title: title,
          text: text,
          icon: 'success',
          confirmButtonText: confirmButton
        });
        break;
      case 'error':
        Swal.fire({
          title: title,
          text: text,
          icon: 'error',
          confirmButtonText: confirmButton
        });
        break;
      default:
        break;
    }
  }

}
