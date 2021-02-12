import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-veiwdonor',
  templateUrl: './veiwdonor.component.html',
  styleUrls: ['./veiwdonor.component.css']
})
export class VeiwdonorComponent implements OnInit {

  regForm:any;
  donorsData:any;
  showInputFlg:any;
  constructor(private donorSer:DonorService,private donorRout:Router,private du:FormBuilder) { 
    this.regForm=this.du.group({
      id:[''],
      firstname:['',[Validators.required,Validators.maxLength(20)]],
      lastname:['',[Validators.required,Validators.maxLength(20)]],
      age:['',Validators.required],
      gender:['',Validators.required],
      dob1:['',Validators.required],
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
    this.fnAllDonor();
  }

  fnAllDonor()
  {
     var id=this.regForm.controls.id.value;
     this.donorSer.findDonorById(id).subscribe(data=>{
       if(data==null)
       return;
       this.donorsData=data;
       console.log(data);
      //  var dt:Date=this.donorsData.dob;

       this.regForm.patchValue(this.donorsData);
      //  this.regForm.controls.dob.value=dt;
     })
  }

  fnUpdate()
  {
    if(this.regForm.valid)
    {
    var doup=this.regForm.value;
    this.donorSer.updateDonor(doup).subscribe(data=>console.log(data));
    this.regForm.reset();
    alert("Detail has been successfully updated");
    }
    else
    {
      alert("Please enter all data");
    }
  }

  fnDelete()
  {
    if(this.regForm.valid)
    {
     var id=this.regForm.controls.id.value;
     this.donorSer.deleteDonorById(id).subscribe(data=>console.log(data));
     this.regForm.reset();
     alert("Donation request has been cancelled successfully");
    }
    else{
      alert("Please enter all data");
    }
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

  navigateToBack()
  {
    this.donorRout.navigate(['userhome']);
  }
}
