import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-buy-form',
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.css']
})
export class BuyFormComponent implements OnInit {
  product: any = {};
  cantidad: number = 1;
  envio: number = 30;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    this.getProduct(params['id']);
    this.cantidad = params['cant'];
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
