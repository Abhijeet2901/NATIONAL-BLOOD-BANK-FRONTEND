import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

 
  mail:any;
  constructor(private hlp:Router,private ls:LoginService) { }

  ngOnInit(): void {
    this.mail=localStorage.getItem('email');
  }

  navigateToHelp()
  { 
     this.hlp.navigate(['help']);
  }

  navigateToAdmin()
  {
    this.hlp.navigate(['admin']);
  }

  fnLogout()
  {
    this.ls.logout();
    this.hlp.navigate(['/login']);
  }



}
