import{Injectable} from '@angular/core'
import { facephoto } from '../models/face-photo.models';

@Injectable({
    providedIn:'root'
})

export class facePhotoService{
    facephotos:facephoto[]=[
        {
            id:1,
    title:'devoxx2023',                                      
    description:'mes de de cloture de formation',
    imageUrl: 'https://img.freepik.com/photos-gratuite/beau-bouquet-fleurs-haleine-bebe-forme-coeur-blanc-fond-rose_23-2147940349.jpg?w=2000',
    createdDate:new Date(),
    photo:300,
    localisation:'Dakar'
    
    
    } ,
    {
        id:2,
    title: 'Devoxx2022',
     description: 'mes de de cloture de formation',
     imageUrl:'https://img.freepik.com/photos-gratuite/ecran-lumineux-vide-personne-tenant-telephone-mobile_53876-98458.jpg',
      createdDate: new Date(),
     photo: 800,
     localisation:'kolda'
      
    },
    
    {
        id:3,
    title: 'Devoxx2022',
    description: 'mes de de cloture de formation',
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWnV2mAsQ1tPHHmerQwltg3598URzkiW0ejlZRtM5PWJP2XntjcTb6N3nDBG5pnUo9GzI&usqp=CAU',
    createdDate: new Date(),
    photo: 20
     
    
    }
    
    ,
    {
        id:4,
    title: 'Devoxx2022',
     description: 'mes de de cloture de formation',
     imageUrl:'https://img.freepik.com/photos-gratuite/ecran-lumineux-vide-personne-tenant-telephone-mobile_53876-98458.jpg',
      createdDate: new Date(),
     photo: 0,
     localisation:'kolda'
      
    },
    
    {
        id:5,
    title: 'Devoxx2022',
    description: 'mes de de cloture de formation',
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWnV2mAsQ1tPHHmerQwltg3598URzkiW0ejlZRtM5PWJP2XntjcTb6N3nDBG5pnUo9GzI&usqp=CAU',
    createdDate: new Date(),
    photo: 1000
     
    
    }
    
      ];
      getAllfacephoto():facephoto[]{
        return this.facephotos;
      }
      getfacephotoById(facephotoId:number):facephoto{
        const facephoto = this.facephotos.find(facephoto => facephoto.id === facephotoId);
        if(!facephoto){
            throw new Error('photos not found'!);
        }else{
            return facephoto;
        }


      }
      facephotoById(facephotoId:number, photoType: 'photo'|'mesphoto'):void{
        const facephoto = this.getfacephotoById(facephotoId);
        photoType==='photo' ? facephoto.photo++ : facephoto.photo--;
        

      }
}
