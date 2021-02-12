import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DelService } from '../del.service';
import { UserregService } from '../userreg.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  req:any;
  userloginForm:any;
  constructor(private urs:UserregService,private du:FormBuilder,private mng:Router) {
    this.userloginForm=this.du.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.email],
      contactNo: ['',  [Validators.required, Validators.minLength(10)]],
      address: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      unit: ['', [Validators.required,Validators.minLength(1)]]
    })
  }

  ngOnInit(): void {
    this.fnAll();
  }
  get f()
  {
    return this.userloginForm.controls;
  }

  fnAll()
  {
    var id=this.userloginForm.controls.id.value;
    this.urs.dataById(id).subscribe(data=>{
      if(data==null)
      return;
      this.req=data;
      this.userloginForm.patchValue(this.req);
    })
  }

  fnUpdateRequest()
  {
    
    var req=this.userloginForm.value;
    this.urs.updateUser(req).subscribe(data=>console.log);
    this.userloginForm.reset();
    alert("Request has been updated successfully");
    
  }
 
  fnDeleteRequest()
  {
    if(this.userloginForm.valid)
    {
     var id=this.userloginForm.controls.id.value;
     this.urs.deleteUser(id).subscribe(data=>console.log(data));
     this.userloginForm.reset();
     alert("Request has been cancelled successfully");
    }
    else
    {
      alert("Please enter all data");
    }
  }

  navigateToBack()
  {
    this.mng.navigate(['userhome']);
  }

  




}
