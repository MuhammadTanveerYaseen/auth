import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
http = inject(HttpClient);
Register(obj:any):Observable<any>{
  return this.http.post<any>("http://localhost:3000/auth/api/register",obj);
}
Login(obj:any):Observable<any>{
  return this.http.post<any>("http://localhost:3000/auth/api/login",obj);
}
}
