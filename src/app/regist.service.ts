import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistService {

  url:string="http://localhost:8080/registration/";
  url1:string="http://localhost:8080/registration/update/";

  constructor(private http:HttpClient) { }

  getGenreg()
  {
    return this.http.get(this.url);
  }

  findGenregById (id:number)
  {
    return this.http.get(this.url+id);
  }

  createGenreg(genreg:any)
  {
    return this.http.post(this.url,genreg);
  }
  // http://localhost:8080/registration/update/4010/Abcd/Abcd
  updateGenreg(id:any,password:any,confirmpassword:any)
  {
    return this.http.put('http://localhost:8080/registration/update/'+id+'/'+password+'/'+confirmpassword,null);
    // return 0;
  }
}
