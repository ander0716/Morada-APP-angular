import { Observable } from "rxjs";
import { User, UserResponse } from "../user";
import { UserLogin } from "../userlogin";
import { UserRegistered } from "../userregistered";
import { UserResponseToken } from "../userToken";

export abstract class UserGateway{
    abstract signup(user: User): Observable<UserResponse>;
    // abstract login(user: UserLogin): Observable<UserResponseToken>
    abstract login(email : String, password : String): Observable<UserResponseToken>

}