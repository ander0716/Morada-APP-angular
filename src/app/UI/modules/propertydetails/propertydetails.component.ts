import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyResponse, ResponsePro } from 'src/app/domain/models/Property/propertyresponse';
import { PropertyUseCase } from 'src/app/domain/usecase/propertyusecase';


@Component({
  selector: 'app-propertydetails',
  templateUrl: './propertydetails.component.html',
  styleUrls: ['./propertydetails.component.css']
})
export class PropertydetailsComponent implements OnInit {

  constructor(private router: ActivatedRoute, private _propertyUseCase: PropertyUseCase) { }
  response: any;
  property!: ResponsePro;
  ngOnInit(): void {
    this.router.queryParamMap.subscribe(
      (params) => {
        var propertyId = params.get('id');
        if (propertyId) {
          this.response = this._propertyUseCase.getPropertyDetail(propertyId);
          this.response.subscribe(
            (data: ResponsePro) => {
              if (data) {
                this.property = data
                console.log(this.property)
              }
            }
          )
        }
      })
  }

}
