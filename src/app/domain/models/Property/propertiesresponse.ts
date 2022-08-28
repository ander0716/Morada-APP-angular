import { Property } from "./property";
import { PropertyRegistered } from "./propertyregistered";

export class PropertiesResponse {
    properties!: PropertyRegistered[];
}

export class ResponseProperties {
    response!: PropertiesResponse;
}