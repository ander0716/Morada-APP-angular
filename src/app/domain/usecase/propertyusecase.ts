import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PropertyGateway } from "../models/Property/gateway/property-gateway";
import { PropertiesResponse, ResponseProperties } from "../models/Property/propertiesresponse";
import { Property } from "../models/Property/property";
import { PropertyResponse, ResponsePro } from "../models/Property/propertyresponse";


@Injectable({
    providedIn: 'root'
})

export class PropertyUseCase {
    constructor(private _propertyGateway: PropertyGateway) { }

    getProperties(): Observable<ResponseProperties> {
        return this._propertyGateway.getProperties();
    }
    getPropertyDetail(id: string): Observable<ResponsePro> {
        return this._propertyGateway.getPropertyDetail(id);
    }
    createProperty( property:Property) : Observable<PropertyResponse> {
        return this._propertyGateway.createProperty(property);
    }
}