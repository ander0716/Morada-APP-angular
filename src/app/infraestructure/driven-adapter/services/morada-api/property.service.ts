import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyGateway } from 'src/app/domain/models/Property/gateway/property-gateway';
import { PropertiesResponse, ResponseProperties } from 'src/app/domain/models/Property/propertiesresponse';
import { Property } from 'src/app/domain/models/Property/property';
import { PropertyResponse, ResponsePro } from 'src/app/domain/models/Property/propertyresponse';
import { GenericService } from 'src/app/infraestructure/helpers/generic.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyService extends PropertyGateway {
  private _token = localStorage.getItem('token');
  private _url = 'http://localhost:3001'

  constructor(private genericService: GenericService) { super(); }

  getProperties(): Observable<ResponseProperties> {
    return this.genericService.get<ResponseProperties>(this._url, 'properties')
  }
  getPropertyDetail(id: string): Observable<ResponsePro> {
    return this.genericService.get<ResponsePro>(this._url, 'properties', id)
  }
  createProperty(property: Property): Observable<PropertyResponse> {
    return this.genericService.post<PropertyResponse>(this._url, 'properties', property)
  }
}
