import { Component, OnInit } from '@angular/core';
import { DonorService } from '../donor.service';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-admindonorpart',
  templateUrl: './admindonorpart.component.html',
  styleUrls: ['./admindonorpart.component.css']
})
export class AdmindonorpartComponent implements OnInit {

  donorsData:any;
  constructor(private donorSer:DonorService,private mail:MailService) { }

  ngOnInit(): void {
    this.fngetAllDonor();
  }

  fngetAllDonor()
  {
    this.donorSer.findAllDonors().subscribe(data=>{this.donorsData=data});
  }

  fnDeleteDonor(id:any)
  {
    this.donorSer.deleteDonorById(id).subscribe(data=>console.log(data));
    alert("Donor request for "+id+" has been cancelled");
  }

  fnInviteMail(to:any,id:any)
  {
    var otp:string='Hello, your request(ID:"'+id+'") for blood donation  has been approved.Thank You for Trusting us!!';
     this.mail.sendEmail(to,otp).subscribe(data=>console.log(data));
     alert("Donor has been invited");
  }


}
