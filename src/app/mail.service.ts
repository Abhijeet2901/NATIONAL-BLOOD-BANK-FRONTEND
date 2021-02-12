import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  url="http://localhost:8080/approve/send/";
  url1="http://localhost:8080/otp/forgotps/";
  constructor(private http:HttpClient) { }

  sendEmail(to:any,otp:any)
  {
      return this.http.get(this.url+to+"/"+otp);
  }

  sendLink(to:any,otp:any)
  {
    

    return this.http.get(this.url1+to+"/"+otp);
  }
}
