import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url:string="http://localhost:8080/bloodStock/";
  url1:string= 'http://localhost:8080/bloodStock/bloodGroup/';
  constructor(private http:HttpClient) { }

  getAllBloodStock()
  {
    return this.http.get(this.url);
  }
  findBloodStockById(id:number)
  {
    return this.http.get(this.url+id);
  }
   findBloodStockByBloodGroup(bloodGroup:any)
  {
    return this.http.get(this.url1+bloodGroup);
  }
   
  updateBloodStock(bloodStock:any)
  {
    return this.http.put(this.url,bloodStock);
  }

 
}
