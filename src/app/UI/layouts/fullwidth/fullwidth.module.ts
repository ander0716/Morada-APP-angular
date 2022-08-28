import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullwidthComponent } from './fullwidth.component';

import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../../modules/login/login.component';
import { RegisterComponent } from '../../modules/register/register.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    FullwidthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class FullwidthModule { }
