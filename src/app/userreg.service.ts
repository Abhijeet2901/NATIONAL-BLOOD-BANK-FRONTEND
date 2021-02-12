import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserregService {

  url:string="http://localhost:8080/request/";
  constructor(private http:HttpClient) { }

  getuserdata()
{
  return this.http.get(this.url);
}

dataById(id:any)
{
  return this.http.get(this.url+id);
}
  adduser(data:any)
  {
    return this.http.post(this.url,data);
  }

  updateUser(data:any)
  {
    return this.http.put(this.url,data);
  }

  deleteUser(id:number)
  {
    return this.http.delete(this.url+id);
  }

  getCurrentData(id:any)
  {
    return this.http.get("${this.url}/${id}");
  }
}
