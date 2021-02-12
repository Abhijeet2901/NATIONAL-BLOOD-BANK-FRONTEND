import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistService } from '../regist.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  passType:string='password';
  restForm:any;
  constructor(private rs:RegistService,private rfg:FormBuilder,private router:Router) {
    this.restForm=this.rfg.group({
      id:['',Validators.required],
      password:['',Validators.required],
      confirmpassword:['',Validators.required],
    }, { validator:this.ConfirmedValidator('password', 'confirmpassword')});
   }

  ngOnInit(): void {
  }

  get f()
  {
    return this.restForm.controls;
  }

  resetPw()
  {
    var id=this.restForm.controls.id.value;
    var password=this.restForm.controls.password.value;
    var confirmpassword=this.restForm.controls.confirmpassword.value;
    this.rs.updateGenreg(id,password,confirmpassword).subscribe(data=>console.log(data));
    alert("Password reset successfully");
    this.router.navigate(['login']);
  }


  ConfirmedValidator(password: string, confirmpassword: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[password];
        const matchingControl = formGroup.controls[confirmpassword];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }

}


changePasswordType()
{
  if(this.passType=='password')
  {
    this.passType='text';
  }
  else
  {
    this.passType='password';
  }
}


}
