import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserregService } from '../userreg.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  userloginForm: any;
  users:any;
  user:any;
  id:any;
  constructor(private abs:FormBuilder,private as:UserregService,private dele:Router) { 
    this.userloginForm = abs.group({
      id: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.email],
      contactno: ['',  [Validators.required, Validators.minLength(10)]],
      address: ['', Validators.required],
      bgp: ['', Validators.required],
      unit: ['', [Validators.required,Validators.minLength(1)]]
    });
  }

  ngOnInit(): void {
    this.fngetuserdata();
  }

  get f()
  {
    return this.userloginForm.controls;
  }

  fngetuserdata()
 {
   this.as.getuserdata().subscribe(data=>this.users=data)
 }

 findById()
  {
    this.as.dataById(this.id).subscribe(data=>this.userloginForm.patchValue(data));
  }

 fnSubmit(){
  // alert(JSON.stringify(this.userloginForm.value))
  this.as.adduser(this.userloginForm.value).subscribe(data=>{
    this.user=data;
    this.userloginForm.patchValue(data);
    this.fngetuserdata();
    alert("SUCCESSFULLY REQUEST ADDED");
  });

}

fnUpdate()
{
 this.user=this.userloginForm.value;
 let res:any;
 this.as.updateUser(this.user).subscribe(data=>{
   res=data;
   this.fngetuserdata();
   this.findById();
   alert("Successfully data Updated");
 });
}



navigateToDelete()
{ 
   this.dele.navigate(['deluser']);
}
}
