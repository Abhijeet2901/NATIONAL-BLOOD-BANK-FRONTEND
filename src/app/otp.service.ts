import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  url:any="http://localhost:8080/otp/";
  constructor(private http:HttpClient) { }

otp(email:any)
{
  return this.http.get(this.url+email);
}
}
