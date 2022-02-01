import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    public router: Router
  ){}

  canActivate(route: ActivatedRouteSnapshot):boolean{

    if (!this.authService.isAuth()) {
      console.log('Token no es válido o ya expiró');
      this.router.navigate(['login']);
      return false;
    } else {
      const expectedRole = route.data['expectedRole'];
      const token = localStorage.getItem('token') as string;
      const { id_acceso }:any = decode(token);
      if (id_acceso !== expectedRole) {
        console.log('Usuario no autorizado para la vista');
        this.router.navigate(['login']);
        return false;
      }
      return true;
    }

  }
  
}
