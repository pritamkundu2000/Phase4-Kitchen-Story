import { Component, OnInit } from '@angular/core';
import { foodservice } from '../food-items/food-items.service';


@Component({
  selector: 'app-nheader',
  templateUrl: './nheader.component.html',
  styleUrls: ['./nheader.component.css']
})
export class NheaderComponent implements OnInit {

  constructor(private foo:foodservice) {
    this.foo.cartSubject.subscribe((data)=>{
    this.cartItems=data;
    });
   }

  ngOnInit(): void {
    this.cartItemf()

  }
  cartItems:number=0;
  cartItemf()
  {
    if(localStorage.getItem('cart')!=null)
    {
      var cartcount=JSON.parse(localStorage.getItem('cart'));
      this.cartItems= cartcount.length;
    }
  }
}

