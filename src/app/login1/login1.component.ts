import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

  loginForm:any;
  reg:any;
  id:any;
  constructor(private formBuilder:FormBuilder,private rtr:Router) {
    this.loginForm=formBuilder.group({
      userId:['',[Validators.required,Validators.minLength(4)]],
      password:['',[Validators.required,Validators.minLength(8)]]
   });
  }

  ngOnInit(): void {
    
  }

  get f()
  {
    return this.loginForm.controls;
  }

  navigateToSignup()
  {
    this.rtr.navigate(['regis']);
  }
  navigateToLogin()
  {
    this.rtr.navigate(['userhome']);
  }

  

 

}
