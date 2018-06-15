import { Component } from '@angular/core';
import { ProductsService } from './products.service'
import { Router } from '@angular/router';
import { Products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private productsService: ProductsService,
  private router: Router) {

  }

  searchForItem(itemName: string) {
  //  this.productsService.products.forEach(this.search, itemName);
    for(let i=0; i< this.productsService.products.length; i++) {
          if (this.productsService.products[i]['name'].toUpperCase()==itemName.toUpperCase()) {
            this.display(this.productsService.products[i]);
          }
    }
  }



  display(displayItem: Products) {
    console.log(displayItem);
    this.productsService.displayItem = displayItem;
    this.router.navigate(['result']);
  }
}
