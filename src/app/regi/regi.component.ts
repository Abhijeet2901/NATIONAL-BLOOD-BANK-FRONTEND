import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistService } from '../regist.service';

@Component({
  selector: 'app-regi',
  templateUrl: './regi.component.html',
  styleUrls: ['./regi.component.css']
})
export class RegiComponent implements OnInit {

  genregForm: any;
  genregs:any;
  genreg:any;
  
  constructor(private grs:RegistService,private rfb:FormBuilder ) {
    this.genregForm=this.rfb.group({
      id:['',Validators.required],
      Fname:['',Validators.required],
      Lname:['',Validators.required],
      Mailid:['',Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      Phoneno: ['',Validators.pattern('[9876]{1}[0-9]{9}')],
      Password:['',Validators.required],
      ConfirmPwd:['',Validators.required]
    });
   }

  ngOnInit(): void {
    this.fnGetAllGenreg();
  }

  get f()
  {
    return this.genregForm.controls;
  }


  fnGetAllGenreg() {
    this.grs.getGenreg().subscribe(data=>this.genreg=data);
  }

  findById(id: any)
  {
    this.grs.findGenregById(id).subscribe(data=>{this.genreg=data; 
      this.genregForm.patchValue(this.genreg);
    });
  
  }

  fnFindGenregById()
  {
   // alert('finding...');
    let id=this.genregForm.get('id').value;
    // alert("finding employee by id : "+id);
    if(id==undefined || id==null)
      return;
  }


  fnCreateGenreg()
  {
    this.genreg=this.genregForm.value;
    // alert(JSON.stringify(employee));
    let result:any;
    this.grs.createGenreg(this.genreg).subscribe(data=>{result=data;this.fnGetAllGenreg();});
  
  }
  

}
