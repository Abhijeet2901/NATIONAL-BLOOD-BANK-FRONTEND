import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string="http://localhost:3000/genreg/"
  constructor(private http:HttpClient) { }

  getAllData()
  {
    return this.http.get(this.url);
  }
  getAllDataById(id:any)
  {
    return this.http.get(this.url+id);
  }
}
