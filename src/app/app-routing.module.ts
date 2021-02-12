import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdmindonorpartComponent } from './admindonorpart/admindonorpart.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminrequestComponent } from './adminrequest/adminrequest.component';
import { AdminstockComponent } from './adminstock/adminstock.component';
import { AskComponent } from './ask/ask.component';
import { BloodsearchComponent } from './bloodsearch/bloodsearch.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DeleteComponent } from './delete/delete.component';
import { DonorComponent } from './donor/donor.component';
import { EditrequestComponent } from './editrequest/editrequest.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { Login1Component } from './login1/login1.component';
import { ReferenceComponent } from './reference/reference.component';
import { RegiComponent } from './regi/regi.component';
import { AuthGuardService } from './service/auth-guard.service';
import { UserhomeComponent } from './userhome/userhome.component';
import { VeiwdonorComponent } from './veiwdonor/veiwdonor.component';


const routes: Routes = [
  { path: 'userhome', component:  UserhomeComponent,canActivate:[AuthGuardService],
         children: [
          { path: 'caro', component: CarouselComponent},
          { path: 'home', component: HomeComponent},
         
         
          { path: 'ask', component:AskComponent },
          { path: 'donor', component: DonorComponent },
          { path: 'search', component: BloodsearchComponent},
          { path: 'about', component: AboutComponent },
          { path: 'ref', component: ReferenceComponent},
          
         
          { path: 'gall', component:GallaryComponent},

         ]
},
  { path: 'login', component:Login1Component},
  { path: 'regis', component: RegiComponent},
  { path: 'help', component:HelpComponent},
  { path: 'deluser', component: DeleteComponent},
  { path: 'viewdonor', component: VeiwdonorComponent},
  { path: 'forgotps', component: ForgotPasswordComponent},
  { path: 'admin', component: AdminhomeComponent,canActivate:[AuthGuardService],
          children: [
            { path: 'admindonor', component: AdmindonorpartComponent},
            { path: 'adminreq', component: AdminrequestComponent},
            { path: 'adminstock', component: AdminstockComponent}
          ],

},
 
  { path: 'edreq/:id', component: EditrequestComponent},
  { path: '', redirectTo:'/login', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
