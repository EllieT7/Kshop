import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list-client',
  templateUrl: './product-list-client.component.html',
  styleUrls: ['./product-list-client.component.css']
})
export class ProductListClientComponent implements OnInit {
  products: any = [];
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.productService.getProducts().subscribe(
      res => {
        this.products = res;
      }, 
      err => console.error(err)
    );
  }

}
