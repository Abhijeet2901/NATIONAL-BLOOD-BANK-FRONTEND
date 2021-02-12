import { createElementCssSelector } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
  jpwd='password';
  loginForm:any;
  reg:any;
  id:any;
  constructor(private formBuilder:FormBuilder,private rtr:Router,private ls:LoginService,private mail:MailService) {
    this.loginForm=formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
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

  loginUser()
  {
    var email=this.loginForm.get('email').value;
    var password=this.loginForm.get('password').value;
    // alert(email);
    // alert(password);
    if(email=="admin@admin.com" && password=="admin")
    {
    this.ls.login(email,password).subscribe(data=>{
      if(data==0)
      {
        alert("LOGIN FAILURE");
        return false;
      }
      else
      {
        alert("LOGIN SUCCESS");
        localStorage.setItem('email',email);
        window.location.href="/admin";
        return true;
      }
    });
  }
  else
  {
    this.ls.userLogin(email,password).subscribe(data=>{
      if(data==0)
      {
        alert("login falied");
        return false;
      }
      else
      {
        alert("Login success");
        localStorage.setItem('email',email)
        window.location.href="/userhome";
        return true;
      }
    })
  }


  
  }
  

  fnTogglePassword()
  {
    // var x=this.loginForm.controls.password;
    if(this.jpwd=='text')
      this.jpwd='password'
      else
      this.jpwd='text';
    // alert("Check")
  }


  navigateToForgotps()
  {
    var email=this.loginForm.get('email').value;
    // alert(email);
    this.ls.forgotPw(email).subscribe(data=>{
      if(data==0)
      {
        alert("User Not Found");
      }
      else
      {
       
        let otp:any="National Blood Bank";
        this.mail.sendLink(email,otp).subscribe(data=>console.log(data));
        alert("Password reset link is sent to your emailid");
          // this.rtr.navigate(['forgotps']);
      }
    })
   
  }

 
}
