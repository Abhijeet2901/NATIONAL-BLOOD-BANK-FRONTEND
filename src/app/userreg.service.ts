import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserregService {

  url:string="http://localhost:3000/userreg/"
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
    return this.http.put(this.url+data.id,data);
  }
}
