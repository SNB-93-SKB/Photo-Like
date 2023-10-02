import { NgModule } from "@angular/core";
import {  RouterModule,Routes } from "@angular/router";
import { facePhotoService } from "./services/face-photo.service";
import { FacephotListeComponent } from "./facephot-liste/facephot-liste.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleFacePhotoComponent } from "./single-face-photo/single-face-photo.component";
const routes: Routes=
[
    {path:'facephotos/:id', component: SingleFacePhotoComponent},
{path :'facephotos', component:FacephotListeComponent},
{path:'', component:LandingPageComponent}

];

@NgModule({
    imports:[
       RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{


}