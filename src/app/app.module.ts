import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{     registerLocaleData} from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { AppComponent } from './app.component';
import { FacePhotoComponent } from './face-photo/face-photo.component';
import { FacephotListeComponent } from './facephot-liste/facephot-liste.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFacePhotoComponent } from './single-face-photo/single-face-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    FacePhotoComponent,
    FacephotListeComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleFacePhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [
    {provide:LOCALE_ID, useValue:'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(){
    registerLocaleData(fr.default);
  }
}
