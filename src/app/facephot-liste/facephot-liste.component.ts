import { Component ,OnInit} from '@angular/core';
import { facephoto } from '../models/face-photo.models';
import { facePhotoService } from '../services/face-photo.service';

@Component({
  selector: 'app-facephot-liste',
  templateUrl: './facephot-liste.component.html',
  styleUrls: ['./facephot-liste.component.scss']
})
export class FacephotListeComponent implements OnInit {

  facephotos!:facephoto[];
  constructor(private facePhotoService: facePhotoService){

  }
 ngOnInit(){
  this.facephotos=this.facePhotoService.getAllfacephoto();
    

 }
}
