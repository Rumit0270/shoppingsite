import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Products[];

  submitted = false;

  totalPrice = 0;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.products;
  }

  addToCart(product: Products) {
      this.productsService.addedItems.push(product);
      console.log(this.productsService.addedItems);
  }

  buy() {
      for(let i =0; i < this.productsService.addedItems.length; i++) {
        this.totalPrice += this.productsService.addedItems[i]['price'];
      }

      console.log(this.totalPrice);
    }



}
