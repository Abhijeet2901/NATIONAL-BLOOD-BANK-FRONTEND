import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlooddonorService {

  url:string="http://localhost:3000/donors/"
  constructor(private http:HttpClient) { }

  getAllBloodDonor()
  {
    return this.http.get(this.url);
  }

  findDonorById(id:any)
  {
    return this.http.get(this.url+id);
  }

  createBloodDonor(bdnr:any)
  {
     return this.http.post(this.url,bdnr);
  }

  updateBloodDonor(bdnr:any)
  {
    return this.http.put(this.url+bdnr.id,bdnr);
  }
}
