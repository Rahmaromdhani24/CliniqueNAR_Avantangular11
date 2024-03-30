import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDigitalService {
  islogin = false;
  admin = false;
 

  constructor(private http: HttpClient) { }
 

  private urlLogin = 'http://localhost:8281/adminDigital/login';
  login(username : string, password: string) {
    return this.http.post(`${this.urlLogin}`,{username, password});}


  private urlAdminDigital = 'http://localhost:8281/adminDigital/getAdminDigital';
  getAdminDigital(id: number): Observable<Object> {
    return this.http.get(`${this.urlAdminDigital}/${id}`);}
  
  
}
