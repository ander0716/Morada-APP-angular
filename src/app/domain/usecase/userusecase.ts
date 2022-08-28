import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserGateway } from "../models/User/gateway/user-gateway";
import { User, UserResponse } from "../models/User/user";
import { UserLogin } from "../models/User/userlogin";
import { UserRegistered } from "../models/User/userregistered";
import { UserResponseToken } from "../models/User/userToken";

@Injectable({
    providedIn:'root'
})

export class UserUseCase {
    constructor(private _userGateway: UserGateway){}

    signup(user : User) : Observable<UserResponse>{
        //TODO: imlementacion de la logica de negocio
        return this._userGateway.signup(user);
    };

    // login(userLogin : UserLogin): Observable<UserResponseToken>{
    //     return this._userGateway.login(userLogin);
    // }

    login(email : String, password : String): Observable<UserResponseToken>{
        return this._userGateway.login(email,password);
    }
}