import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DelService } from '../del.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  deleteForm:any
  user:any
  users:any
  
  constructor(private ds:DelService,private du:FormBuilder) {
    this.deleteForm =du.group({
      id: [''],
      firstname: [''],
      lastname: [''],
      // age: [''],
      // gender: [''],
      // email: [''],
      // contactno: [''],
      // address:[''],
      // bgp:[''],
      // unit:['']
    });

   }

  ngOnInit(): void {
    this.fnalldata();
  }

  fnalldata()
  {
  //  alert('fetching data');
    this.ds.findalldata().subscribe(data=>{
      this.users=data;
    //  alert(JSON.stringify(this.users));
     } );
  }

  findById()
  {
    // alert('finding');
    let id=this.deleteForm.get('id').value;
        // alert('id is '+id);
    this.ds.findUserById(id).subscribe(data=>{this.user=data; 
      // alert('received '+data);
      this.deleteForm.patchValue(this.user);
    });
  }


  fndeleteUser()
  {
    let id=this.deleteForm.get('id').value;
    
    let result:any;
    this.ds.deleteUser(id).subscribe(data=>result=data);
    alert("User Details Deleted");
  }
    





}
