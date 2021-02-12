import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserregService } from '../userreg.service';

@Component({
  selector: 'app-editrequest',
  templateUrl: './editrequest.component.html',
  styleUrls: ['./editrequest.component.css']
})
export class EditrequestComponent implements OnInit {

  // userRequestForm:any;
  user:any;
  users:any;
  id:any;
  userRequestForm= new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl(''),
    contactno: new FormControl(''),
    address: new FormControl(''),
    bgp: new FormControl(''),
    unit: new FormControl('')
  })
  
 
  constructor(private rs:UserregService,private acr:ActivatedRoute) {
   
   }

  ngOnInit(): void {
    this.rs.getCurrentData(this.acr.snapshot.params.id).subscribe((result:any)=>{
      this.userRequestForm = new FormGroup ({
      
    
        firstname: new FormControl(result['firstname']),
        lastname: new FormControl(result['lastname']),
        age: new FormControl(result['age']),
        gender: new FormControl(result['gender']),
        email: new FormControl(result['email']),
        contactno: new FormControl(result['contactno']),
        address: new FormControl(result['address']),
        bgp: new FormControl(result['bgp']),
        unit: new FormControl(result['unit'])
      })
    })
  }

  

}
