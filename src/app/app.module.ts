import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AskComponent } from './ask/ask.component';
import { DonorComponent } from './donor/donor.component';
import { AboutComponent } from './about/about.component';
import { Login1Component } from './login1/login1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReferenceComponent } from './reference/reference.component';
import { HelpComponent } from './help/help.component';
import { HttpClientModule } from '@angular/common/http';
import { BloodsearchComponent } from './bloodsearch/bloodsearch.component';
import { DeleteComponent } from './delete/delete.component';
import { RegiComponent } from './regi/regi.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { GallaryComponent } from './gallary/gallary.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';

@NgModule({
  declarations: [
    AppComponent,
    AskComponent,
    DonorComponent,
    AboutComponent,
    Login1Component,
    ReferenceComponent,
    HelpComponent,
    BloodsearchComponent,
    DeleteComponent,
    RegiComponent,
    CarouselComponent,
    HomeComponent,
    GallaryComponent,
    UserhomeComponent,
    AdminhomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
