import { Component, OnInit } from '@angular/core';
import { DelService } from '../del.service';
import { DonorService } from '../donor.service';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-adminrequest',
  templateUrl: './adminrequest.component.html',
  styleUrls: ['./adminrequest.component.css']
})
export class AdminrequestComponent implements OnInit {

  users:any;
  msg:string=""
  constructor(private ds:DelService,private sndmail:MailService) { }

  ngOnInit(): void {
    this.fngetAllRequest();
  }

  fngetAllRequest()
  {
    this.ds.findalldata().subscribe(data=>{
      this.users=data;
    //  alert(JSON.stringify(this.users));
     } );
  }

  deleteRequest(id:any)
  {
    this.ds.deleteUser(id).subscribe(data=>console.log(data));
    alert("Blood request of id: "+id+" has been deleted");
  }

  fnSendEmail(to:any,uid:any,bloodGroup:any,unit:any)
  {
   
    var otp:string='Hello, your request(ID:"'+uid+'") for Blood(blood group: "'+bloodGroup+'") of '+unit+' unit(s) has been approved.Thank You for Trusting us!!';
     this.sndmail.sendEmail(to,otp).subscribe(data=>console.log(data));
     alert("Approval is sent to user");
  }

}
