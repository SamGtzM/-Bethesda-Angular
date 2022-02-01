import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AdminClientesService {

  private url = environment.url;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }

  singup(user:any){
    return this.http.post(`${this.url}/auth/singup`, user)
  }

  getUsers(){
    return this.http.get(`${this.url}/auth/`)
  }

}
