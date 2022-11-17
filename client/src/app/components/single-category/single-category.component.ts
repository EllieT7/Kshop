import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
  products: any = [];

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    this.getProducts(params['id']);
  }

  getProducts(id: string) {
    this.productsService.getProductsByType(id).subscribe(
      res => {
        this.products = res;
        console.log(this.products);
      },
      err => console.error(err)
    );
  }

}
