import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  displayItem: Products;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.displayItem = this.productsService.displayItem;
    console.log(this.displayItem);
  }

}
