import {Injectable} from "@angular/core";
import {efood} from './food-items';
import {Subject} from 'rxjs';
//import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class foodservice{
 
  constructor(){}
  // baseurl=global.apiBaseUrl;
   cartSubject=new Subject<any>();
   //openLoginService=new Subject<any>();
 private food:efood[]=[{
    "Item":1,
    "Name":"Muesli",
    "Cost":299,
    "Rating":5.0,
    "qnt":1,
    "Img":"assets/muesli.jpeg"
    },
    {
      "Item":2,
      "Name":"Oats",
      "Cost":350,
      "Rating":4.8,
      "qnt":1,
      "Img":"assets/oats.jpg"
      },
      {
        "Item":3,
        "Name":"Corn Flakes",
        "Cost":75,
        "Rating":5.0,
        "qnt":1,
        "Img":"assets/corn.jpg"
        },
        {
          "Item":4,
          "Name":"Oranges",
          "Cost":100,
          "Rating":5.0,
          "qnt":1,
          "Img":"assets/oranges.jpg"
          },
          {
            "Item":5,
            "Name":"pomegranate",
            "Cost":150,
            "Rating":5.0,
            "qnt":1,
            "Img":"assets/pome.jpg"
            },
            {
              "Item":6,
              "Name":"Apples",
              "Cost":250,
              "Rating":5.0,
              "qnt":1,
              "Img":"assets/apples.jpg"
              },
               {
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

    getFood():efood[]
    {
       return this.food;
    }
    getf(id:number):efood{
     const f1=this.food.find(f1=>f1.Item===id)
     return f1;       
    }

}   
 