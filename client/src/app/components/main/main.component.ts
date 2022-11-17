import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  items: any = [
    {category: 'BTS', title: 'Black friday', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.', image: 'assets/img/banner1.jpg' },
    {category: 'TXT', title: 'New collection', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.', image: 'assets/img/banner2.jpg' },
    {category: 'TWICE',title: 'New collection', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.', image: 'assets/img/banner3.jpeg' },]
  products: any = [];
  lightsticks: any = [];
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    console.log('hola');
    this.getProducts();
    
  }
  getProducts() {
    this.productService.getProducts().subscribe(
      res => {
        this.products = res; 
        for(let i = 0; i < this.products.length; i++){
          // console.log('hola');
          // console.log(this.products[i].tipo_producto_id_tp);
          if(this.products[i].tipo_producto_id_tp!=1){
            
            if(this.products[i].tipo_producto_id_tp==3){
             this.lightsticks.push(this.products[i]);
              console.log('añadiendo a lightsticks');
            }else{
              console.log(this.products.splice(i,1));
              console.log('borrando');
            }
          }
        }
        console.log(this.products);
      },
      err => console.error(err)
    );
  }

}
