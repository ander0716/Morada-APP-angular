import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './UI/layouts/default/default.module';
import { FullwidthModule } from './UI/layouts/fullwidth/fullwidth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserGateway } from './domain/models/User/gateway/user-gateway';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './infraestructure/driven-adapter/services/morada-api/user.service';
import { PropertyGateway } from './domain/models/Property/gateway/property-gateway';
import { PropertyService } from './infraestructure/driven-adapter/services/morada-api/property.service';
import { AuthInterceptor } from './infraestructure/helpers/authinterceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullwidthModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, { provide: UserGateway, useClass: UserService }, { provide: PropertyGateway, useClass: PropertyService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
