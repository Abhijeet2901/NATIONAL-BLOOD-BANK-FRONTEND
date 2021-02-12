import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-adminstock',
  templateUrl: './adminstock.component.html',
  styleUrls: ['./adminstock.component.css']
})
export class AdminstockComponent implements OnInit {

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
   this.fnGetAllBloodStock();
  }

  fnGetAllBloodStock()
  {
    this.y.getAllBloodStock().subscribe(data=>this.bloodStocks=data);
  }
fnGetBloodStockById()
{
this.y.findBloodStockById(this.id).subscribe(data=>{
  console.log(data);
  this.bloodStockForm.patchValue(data)});
}
fnGetBloodStockByBloodGroup()
{
this.y.findBloodStockByBloodGroup(this.bloodGroup).subscribe(data=>{
  console.log(data);
  this.bloodStockForm.patchValue(data)});
}
fnUpdateBloodStock()
{
  if(this.bloodStockForm.valid)
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
  else
  {
    alert("Please enter data");
  }


}

fn(id:number)
{
  this.fnFindById(id);
}

fnFindById(id:any)
{
  let result:any;
  this.y.findBloodStockById(id).subscribe(data=>{
    result=data;
    this.bloodStockForm.patchValue(result);
  })
}



}
