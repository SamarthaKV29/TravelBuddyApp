import {Injectable } from '@angular/core';
import {Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGaurd implements CanActivate{
    constructor(private router:Router){

    }

    canActivate(){
        if(localStorage.getItem('currentUser')){
            return true;
        }
        this.router.navigate(["/login"]);
        return false;
    }
}