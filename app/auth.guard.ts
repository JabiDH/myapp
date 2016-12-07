import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { Auth } from './auth.service'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: Auth, private router: Router) { }

    canActivate() {
        if (this.auth.authenticated()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}