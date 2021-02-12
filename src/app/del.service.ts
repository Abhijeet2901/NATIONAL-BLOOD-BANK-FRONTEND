import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DelService {

  url:string="http://localhost:8080/request/";
  constructor(private http:HttpClient) { }

  findalldata()
  {
    return this.http.get(this.url);
  }

  findUserById(id:any)
  {
    return this.http.get(this.url+id);
  }

  deleteUser(id:any)
  {
    return this.http.delete(this.url+id);
  }
}
