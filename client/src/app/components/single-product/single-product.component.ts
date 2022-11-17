import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  cantidad: number = 1;
  product: any = {};
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    this.getProduct(params['id']);
  }

  getProduct(id: string) {
    this.productService.getProduct(id).subscribe(
      res => {
        this.product = res;
      },
      err => console.error(err)
    );
  }

}
