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
    this.userloginForm = this.abs.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      contactNo: ['',  [Validators.required, Validators.minLength(10)]],
      address: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      unit: ['', [Validators.required,Validators.minLength(1)]]
    });
  }

  ngOnInit(): void {
    
  }

  get f()
  {
    return this.userloginForm.controls;
  }

  fnAddRequest()
  {
    
    var request=this.userloginForm.value;

    let result:any;
    this.as.adduser(request).subscribe(data=>{
      result=data;
      alert("Request has been registered successfully");
      alert("YOUR REQUEST ID IS '"+result.id+"' .KINDLY NOTE IT FOR FURTHER ACTIONS.");

    });
    this.userloginForm.reset();
  
  
   
  }
  



navigateToDelete()
{ 
   this.dele.navigate(['deluser']);
}
}
