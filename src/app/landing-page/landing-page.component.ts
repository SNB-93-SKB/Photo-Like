import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { facephoto } from '../models/face-photo.models';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor( private router:Router){

  }
ngOnInit5(){
  
}
  onContinue():void{
this.router.navigateByUrl('facephotos');

  }

}
