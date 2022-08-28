import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})


export class AuthGuard implements CanActivate {
    
    constructor(
        public router : Router
    )
    {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['full/login'])
            return false;
        }
        return true;
    }

    

}