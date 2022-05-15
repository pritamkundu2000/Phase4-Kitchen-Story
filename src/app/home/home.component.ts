import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Title="Online Store";
  _searchTerm:string;
  imgWidth1="600";
  imgHeight1="600";
  imgRadius="15";
  dispck:boolean=false;
  imgDisplay()
    {
        this.dispck=!this.dispck;
    }

  constructor() { }

  ngOnInit(): void {
  }
  Food:any[]=[
    {
    "Item":1,
    "Name":"Broccoli Quinoa Cakes",
    "Cost":550,
    "Rating":5.0,
    "Img":"assets/broccoli-cakes-14.jpg"
    },
    {
      "Item":2,
      "Name":"Roasted Eggplant Lasagna",
      "Cost":500,
      "Rating":4.8,
      "Img":"assets/eggplant.jpg"
      },
      {
        "Item":3,
        "Name":"Indian Shepherd’s Pie",
        "Cost":480,
        "Rating":5.0,
        "Img":"assets/shepherds.jpg"
        },
  ]

}
