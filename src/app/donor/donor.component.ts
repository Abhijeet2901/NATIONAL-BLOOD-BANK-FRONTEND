
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlooddonorService } from '../blooddonor.service';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {


  

  
  regForm:any;
  showInputFlg: any;
  constructor(private bds:BlooddonorService,private fb:FormBuilder,private donor:Router) {
    this.regForm=this.fb.group({
      id:[''],
      firstname:['',[Validators.required,Validators.maxLength(20)]],
      lastname:['',[Validators.required,Validators.maxLength(20)]],
      age:['',Validators.required],
      gender:['',Validators.required],
      dob:['',Validators.required],
      height:['',Validators.required],
      weight:['',Validators.required],
      mailid:['',Validators.required],
      phoneno:[''],
      address:['',Validators.required],
      bloodgroup:[''],
      flag:[''],
      ldd:['']
      })
   }

  ngOnInit(): void {
    
  }

  

  get fn()
  {
    return this.regForm.controls;
  }

  radioValueCheck(x: any) {
    if(x == 1){
      this.showInputFlg=false;
    }
    else{
      this.showInputFlg=true;
    }
    }

   fnAdd()
   {
     
     var donor=this.regForm.value;
     let result:any;
     this.bds.createBloodDonor(donor).subscribe(data=>{
       result=data;
       alert("Donor has been registered successfully");
       alert("Your request id is '"+result.id+"' for donating your blood. Please note it for further actions");
     });
     this.regForm.reset();
   
     
   }

    navigatetoview()
    {
        this.donor.navigate(['viewdonor']);
    }

}
