import {Injectable} from "@angular/core";
import { efood } from '../food-items/food-items';
import {Subject} from 'rxjs';
//import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class nutservice{
 
  constructor(){}
  // baseurl=global.apiBaseUrl;
   cartSubject=new Subject<any>();
   //openLoginService=new Subject<any>();
 private cere:efood[]=[{
    "Item":7,
    "Name":"Almonds",
    "Cost":700,
    "Rating":5.0,
    "qnt":1,
    "Img":"assets/almond.jpg"
    },
    {
      "Item":8,
      "Name":"Cashew",
      "Cost":500,
      "Rating":5.0,
      "qnt":1,
      "Img":"assets/cashew.jpg"
      },
      {
        "Item":9,
        "Name":"Groundnuts",
        "Cost":120,
        "Rating":5.0,
        "qnt":1,
        "Img":"assets/ground.jpg"
        },
]
getnut():efood[]
{
   return this.cere;
}
getf(id:number):efood{
 const f1=this.cere.find(f1=>f1.Item===id)
 return f1;       
}

}
