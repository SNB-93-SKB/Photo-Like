import { Component, OnInit,Input } from '@angular/core';
import { facephoto } from '../models/face-photo.models';
import { facePhotoService } from '../services/face-photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-photo',
  templateUrl: './face-photo.component.html',
  styleUrls: ['./face-photo.component.scss']
})
export class FacePhotoComponent implements OnInit {
  @Input() facephoto!:facephoto;

buttonText!:string;
constructor(private facephotoService:facePhotoService,
  private router: Router){}


ngOnInit() {
  
  this.buttonText='oh photo';
}
onphoto(){
  if (this.buttonText==='oh photo') {
    this.facephotoService.facephotoById(this.facephoto.id,'photo');
    this.buttonText='Oops, unphoto';
    
  } else {
    this.facephotoService.facephotoById(this.facephoto.id,'mesphoto');
    this.buttonText='oh photo';
  }
}

onviewFacePhoto(){
  this.router.navigateByUrl(`facephotos/${this.facephoto.id}`)
  }

}

