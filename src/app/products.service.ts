import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 products: Products[] = [
    {'id':1 ,'name':'jacket' , 'price':5000 , 'url':'assets/jacket.jpg' },
    {'id':2 ,'name':'pant'  , 'price':2000 , 'url': 'assets/pant.jpg'},
    {'id':3 ,'name':'shirt'  , 'price':3000 , 'url':'assets/shirt.jpg' },
    {'id':4 ,'name':'shoes' , 'price': 2000, 'url': 'assets/shoes.jpg'},
    {'id':5 ,'name':'sweater' , 'price': 2500, 'url': 'assets/sweater.jpg'},
    {'id':6 ,'name':'tshirt'  , 'price': 4000, 'url':'assets/tshirt.jpg' },
  ];

  displayItem: Products;

  addedItems: Products[] = [];

  constructor() {}
}
