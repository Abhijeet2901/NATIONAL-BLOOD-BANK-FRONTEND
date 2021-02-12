import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private ls:LoginService,private rtr:Router) { }

  ngOnInit(): void {
  }


  fnLogout()
  {
    this.ls.logout();
    this.rtr.navigate(['/login']);
  }

}
