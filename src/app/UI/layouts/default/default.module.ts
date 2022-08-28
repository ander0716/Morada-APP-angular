import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../modules/home/home.component';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { ContactComponent } from '../../modules/contact/contact.component';
import { SharedModule } from '../../shared/shared.module';
import {MatSliderModule} from '@angular/material/slider';
import { PropertydetailsComponent } from '../../modules/propertydetails/propertydetails.component';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ContactComponent,
    PropertydetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSliderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DefaultModule { }
