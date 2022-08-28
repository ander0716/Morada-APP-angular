import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserGateway } from 'src/app/domain/models/User/gateway/user-gateway';
import { User, UserResponse } from 'src/app/domain/models/User/user';
import { UserLogin } from 'src/app/domain/models/User/userlogin';
import { UserResponseToken } from 'src/app/domain/models/User/userToken';
import { GenericService } from 'src/app/infraestructure/helpers/generic.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends UserGateway {
  private _url = 'http://localhost:3001'

  constructor(private _genericService: GenericService) {
    super()
  }

  signup(user: User): Observable<UserResponse> {
    return this._genericService.post<User>(this._url, 'users/signup', user)
  }

  // login(user: UserLogin): Observable<any> {
  //   return this._genericService.post<UserLogin>(this._url, 'users/login',user)
  // }

  login(email: String, password: String): Observable<UserResponseToken> {
    return this._genericService.post<UserLogin>(this._url, 'users/login', { email, password })
  }


}
