import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  url:string="http://localhost:8080/donors/";
  constructor(private http:HttpClient) { }

  findAllDonors()
  {
    return this.http.get(this.url);
  }

  findDonorById(id:any)
  {
    return this.http.get(this.url+id);
  }

  updateDonor(doup:any)
  {
    return this.http.put(this.url,doup);
  }

  deleteDonorById(id:any)
  {
    return this.http.delete(this.url+id);
  }
}
