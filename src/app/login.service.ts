import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string="http://localhost:8080/login/";
  url1:string="http://localhost:8080/login/logout";
  url2:string="http://localhost:8080/registration/login/";
  url3:string="http://localhost:8080/registration/reset/";
  constructor(private http:HttpClient) { }

 login(email:any,password:any)
 {
   return this.http.get(this.url+email+"/"+password);
 }
 isUserLoggedIn() {
  let email = localStorage.getItem('email')
  console.log(!(email === null))
  return !(email === null)
}

userLogin(emailid:any,password:any)
{
  return this.http.get(this.url2+emailid+"/"+password);
}

logout()
{
  localStorage.removeItem('email');
}

forgotPw(email:any)
{
  return this.http.get(this.url3+email)
}

}
