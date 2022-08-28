import { Observable } from "rxjs";
import { PropertiesResponse, ResponseProperties } from "../propertiesresponse";
import { Property } from "../property";
import { PropertyResponse, ResponsePro } from "../propertyresponse";

export abstract class PropertyGateway {
    abstract getProperties() : Observable<ResponseProperties>;
    abstract getPropertyDetail(id : string) : Observable<ResponsePro>;
    abstract createProperty(property : Property) : Observable<PropertyResponse>;
}