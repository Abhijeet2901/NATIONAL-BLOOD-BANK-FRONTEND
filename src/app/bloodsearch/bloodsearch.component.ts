import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-bloodsearch',
  templateUrl: './bloodsearch.component.html',
  styleUrls: ['./bloodsearch.component.css']
})
export class BloodsearchComponent implements OnInit {
 
  bloodStocks:any;
  id:any;
   bloodGroup:any;
  bloodStock:any;
  bloodStockForm=new FormGroup({
    
    id:new FormControl(),
    bloodGroup:new FormControl(),
    noOfUnits:new FormControl()
  });

  constructor(private y:TodoService) { }

  ngOnInit(): void {
    this. fnGetAllBloodStock();
  }

  fnGetAllBloodStock()
  {
    this.y.getAllBloodStock().subscribe(data=>this.bloodStocks=data);
  }
fnGetBloodStockById()
{
this.y.findBloodStockById(this.id).subscribe(data=>this.bloodStockForm.patchValue(data));
}
fnGetBloodStockByBloodGroup()
{
this.y.findBloodStockByBloodGroup(this.bloodGroup).subscribe(data=>this.bloodStockForm.patchValue(data));
}
fnUpdateBloodStock()
{
// alert("updating...");
this.bloodStock=this.bloodStockForm.value;
// alert(employee.id);
let result:any;
this.y.updateBloodStock(this.bloodStock).subscribe(data=>{
result=data;
this.fnGetAllBloodStock();
this.fnGetBloodStockById();
}
);


}  
}
