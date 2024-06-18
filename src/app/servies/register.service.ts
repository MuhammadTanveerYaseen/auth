import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
http = inject(HttpClient);
Register(obj:any){
  this.http.post("hh",obj);
}
}
