import { Component, OnInit} from '@angular/core';
import { facephoto } from '../models/face-photo.models';
import { facePhotoService } from '../services/face-photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-photo',
  templateUrl: './single-face-photo.component.html',
  styleUrls: ['./single-face-photo.component.scss']
})
export class SingleFacePhotoComponent implements OnInit {
 facephoto!:facephoto;

  buttonText!:string;
  constructor(private facephotoService:facePhotoService,
    private router:ActivatedRoute){}
  
  
  ngOnInit() {
    
    this.buttonText='oh photo';
    const facephotoId= +this.router.snapshot.params['id'];
    this.facephoto= this.facephotoService.getfacephotoById(facephotoId);
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
  
  
}
