import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertiesResponse, ResponseProperties } from 'src/app/domain/models/Property/propertiesresponse';
import { PropertyResponse } from 'src/app/domain/models/Property/propertyresponse';
import { PropertyUseCase } from 'src/app/domain/usecase/propertyusecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _propertyUseCase: PropertyUseCase, private router: Router) { }
  response: any;
  properties!: ResponseProperties;

  ngOnInit(): void {
    this.response = this._propertyUseCase.getProperties();
    this.response.subscribe(
      (data: ResponseProperties) => {
        if (data) {
          this.properties = data
          console.log('propiedades', this.properties);
        }
      }
    );
  }
  goToDetails(id: String) {
    this.router.navigate(['default/property'], { queryParams: { id } })
  }
}
