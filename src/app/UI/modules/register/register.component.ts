import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, UserResponse } from 'src/app/domain/models/User/user';
import { UserRegistered } from 'src/app/domain/models/User/userregistered';
import { UserUseCase } from 'src/app/domain/usecase/userusecase';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  public validationMessages = {
    name: [
      { type: 'required', message: 'Este campo es requerido' }
    ],
    email: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'email', message: 'Solo se permiten emails' }
    ],
    password: [
      { type: 'required', message: 'Este campo es requerido' },
      { type: 'minlength', message: 'Este campo debe de tener minimo 6 caracteres' },
    ],
    documentType: [
      { type: 'required', message: 'Este campo es requerido' }
    ],
    document: [
      { type: 'required', message: 'Este campo es requerido' }
    ],
    phone: [
      { type: 'required', message: 'Este campo es requerido' }
    ]
  }

  response$: any;
  user$!: UserRegistered;
  constructor(
    private _userUseCase: UserUseCase,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['',
        [
          Validators.required
        ]
      ],
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
      ],
      documentType: ['',
        [
          Validators.required
        ]
      ],
      document: ['',
        [
          Validators.required
        ]
      ],
      phone: ['',
        [
          Validators.required
        ]
      ]
    })
  }

  public get f() { return this.registerForm.controls } //Funcion q retorna los controles del formulario

  register() {
    if (this.registerForm.valid) {
      var user: User = {
        name: this.registerForm.controls['name'].value,
        email: this.registerForm.controls['email'].value,
        password: this.registerForm.controls['password'].value,
        documentType: this.registerForm.controls['documentType'].value,
        document: this.registerForm.controls['document'].value,
        phone: this.registerForm.controls['phone'].value,
        role: 1
      };
      this.response$ = this._userUseCase.signup(user);
      this.response$.subscribe((data: UserResponse) => {
        if (data) {
          this.user$ = data.user
          Swal.fire({
            title: 'Usuario creado',
            text: 'El usuario ' + this.user$.name + ' Fue creado exitosamente',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
        }
        else {
          Swal.fire({
            title: 'Usuario no creado',
            text: 'El usuario ' + this.user$.name + ' no pudo ser creado',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      })
    }

  }
}
