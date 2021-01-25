
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlooddonorService } from '../blooddonor.service';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {


  

  dd:any;
  donors:any;
  regForm:any;
  showInputFlg: any;
  constructor(private bds:BlooddonorService,private fb:FormBuilder) {
    this.regForm=fb.group({
      iD:['',Validators.required],
      firstName:['',[Validators.required,Validators.maxLength(20)]],
      lastName:['',[Validators.required,Validators.maxLength(20)]],
      aGe:['',Validators.required],
      genDer:['',Validators.required],
      dTe:['',Validators.required],
      heIt:['',Validators.required],
      weIt:['',Validators.required],
      mailId:['',Validators.required],
      contNo:'',
      addRess:['',Validators.required],
      bloodGrp:'',
      flag:'',
      date:''
      })
   }

  ngOnInit(): void {
    this.fngetAllBloodDonors();
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

    fngetAllBloodDonors()
    {
      this.bds.getAllBloodDonor().subscribe(data=>this.dd=data);
    }

    fnFindDonorById()
    {
      let id=this.regForm.get('iD').value;
      this.bds.findDonorById(id).subscribe(data=>{this.dd=data;
        this.regForm.patchValue(this.dd);
      });
      /*this.bds.findDonorById(this.id).subscribe(data=>this.regForm.patchValue(data));*/
    }


    fnCreateBloodDonor()
    {
      /*this.dd=this.regForm.value;
      //alert(JSON.stringify(this.dd));
      let dnnr:any;
      this.bds.createBloodDonor(this.dd).subscribe(data=>{dnnr=data;this.fngetAllBloodDonors();});
      alert("Donor data Successfully added");*/
      this.bds.createBloodDonor(this.regForm.value).subscribe(data=>{
        this.dd=data;
        this.regForm.patchValue(data);
        this.fngetAllBloodDonors();
        alert("Your request successfully registered");
      });
    }

    fnUpdateBloodDonor()
    {
      this.dd=this.regForm.value;
      let result:any;
      this.bds.updateBloodDonor(this.dd).subscribe(data=>{
       result=data;
       this.fngetAllBloodDonors();
       this.fnFindDonorById();
       alert("Successfully Updated details");
      })
    }

}
