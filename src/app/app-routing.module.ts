import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './UI/layouts/default/default.component';
import { FullwidthComponent } from './UI/layouts/fullwidth/fullwidth.component';
import { ContactComponent } from './UI/modules/contact/contact.component';
import { HomeComponent } from './UI/modules/home/home.component';
import { LoginComponent } from './UI/modules/login/login.component';
import { PropertydetailsComponent } from './UI/modules/propertydetails/propertydetails.component';
import { RegisterComponent } from './UI/modules/register/register.component';
import { AuthGuard } from './UI/shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'full/login', pathMatch: 'full' },
  {
    path: 'default', component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [{
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'property',
      component: PropertydetailsComponent
    }
    ]
  },
  {
    path: 'full', component: FullwidthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
