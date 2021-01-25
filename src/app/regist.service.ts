import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistService {

  url:string="http://localhost:3000/genreg/"
  constructor(private http:HttpClient,) { }

  getGenreg()
  {
    return this.http.get(this.url);
  }

  findGenregById (id:any)
  {
    return this.http.get(this.url+id);
  }

  createGenreg(genreg:any)
  {
    return this.http.post(this.url,genreg);
  }
}
