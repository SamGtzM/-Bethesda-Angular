import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.url;

  constructor(
    private http: HttpClient, 
    private jwtHelper: JwtHelperService
  ) { }

  singin(user:any){
    return this.http.post(`${this.url}/auth/singin`, user)
  }

  isAuth():boolean{
    const token = localStorage.getItem('token') as string;
    if (this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')) {
      return false;
    }
    return true;
  }
}
