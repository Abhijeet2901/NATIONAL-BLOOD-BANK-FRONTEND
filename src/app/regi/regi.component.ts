import { Component, OnInit,ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OtpService } from '../otp.service';
import { RegistService } from '../regist.service';

@Component({
  selector: 'app-regi',
  templateUrl: './regi.component.html',
  styleUrls: ['./regi.component.css']
})
export class RegiComponent implements OnInit,AfterViewInit {
  gotp:any;
  genregForm: any;
  passType:string='password';
  genreg:any;
  
  constructor(private grs:RegistService,private rfb:FormBuilder,private otp:OtpService,private rt:Router,private cdr:ChangeDetectorRef) {
    this.genregForm=this.rfb.group({
      id:['',Validators.required],
      fname:['',Validators.required],
      lname:['',Validators.required],
      emailid:['',Validators.pattern("^[A-Za-z0-9!#$&*._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],        
      phoneno:['',Validators.pattern('[9876]{1}[0-9]{9}')],
      password:['',Validators.required],
      confirmpassword:['',Validators.required],
      // generatedOtp:['',[Validators.required]],
      // enteredOtp:['',[Validators.required]],
      tnc:['',Validators.required]
    },
    { validator:this.ConfirmedValidator('password', 'confirmpassword')}
    );
    
   }

   ngAfterViewInit() {
    // this.message = 'all done loading :)'
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    // this.genregForm.controls.generatedOtp.value='122';
  }

  // validateOtp(frm: FormGroup) {
  //   return frm.controls['generatedOtp'].value === frm.controls['enteredOtp'].value ? null : {'mismatch': true};
  // }

//   <div class="invalid-feedback" *ngIf="newAccountForm.errors?.mismatch && 
// (newAccountForm.controls['repeatNewPassword'].dirty || newAccountForm.controls['repeatNewPassword'].touched)">
//   Passwords don't match.
// </div>

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

  get f()
  {
    return this.genregForm.controls;
  }
  // fnsubmit()
  // {
  //   if(this.applypassportForm.valid)
  //   {
  //     console.log("form valid");
  //     // this.fnAdd();
  //   this.router.navigate(['success'])
  //   }
  //   else
  //   {
  //     console.log("form invalid");
  //     alert("please check the form before submitting.....")
  //   }
  // }

 fnAddUser()
 {
  
   var user=this.genregForm.value;
  //  var id=this.genregForm.controls.id.value;
  let res:any;
   console.log(user);
   this.grs.createGenreg(user).subscribe(data=>{
    res=data;
    console.log(res);
    alert("User succufully registered");
    alert("YOUR REGISTRATION ID IS '"+res.id+"' .KINDLY NOTE IT FOR FURTHER ACTIONS.");
   });
   this.genregForm.reset();
   this.rt.navigate(['login']);
 
   
   }
   
 
  // alert('user entered '+this.genregForm.controls.enteredOtp.value);
 

//  fnOtp()
//  {
//    var user=this.genregForm.value;
//   //  alert(user.emailid);
//    var email=this.genregForm.controls.emailid.value;
//   //  alert(email);
//     this.otp.otp(email).subscribe(data=>{
//       console.log('otp genereated is '+data);
//       // this.genregForm.controls.generatedOtp.value=data.toString();
//       // this.genregForm.controls.enteredOtp.value=data;
//       // this.genregForm.controls.generatedOtp.value='333';
//       this.gotp=data.toString();
//       alert(this.gotp);
//       console.log(this.gotp);
//       // this.genregForm.controls.generatedOtp.value='11111';
//     });
//     // alert('Generated otp is'+this.gotp);
//     alert("Otp sent to your mail id")
//  }

//  otpValidators()
//  {
//   return (formGroup: FormGroup) => {
//     const control = formGroup.controls['generatedOtp'];
//     const matchingControl = formGroup.controls['enteredOtp'];
//     if (matchingControl.errors && !matchingControl.errors.otpValidators) {
//         return;
//     }
//     if (control.value !== matchingControl.value) {
//         matchingControl.setErrors({ otpValidators: true });
//     } else {
//         matchingControl.setErrors(null);
//     }
// }
//  }
  
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
