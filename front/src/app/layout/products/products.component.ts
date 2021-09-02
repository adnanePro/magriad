import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/config/models/Product';
import { ProductService } from 'src/app/config/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[]=[];
  display=false;
  loading=true;
  productSelected:Product=new Product();
  constructor(private productService:ProductService) {
    this.productService.getProductsInStock().subscribe(data=>{
      this.products = data;
      this.loading = false;
    })
   }

  ngOnInit(): void {
    
  }

  sale(product:Product){
    this.productSelected = new Product().make(product);
    this.display = true; 
  }

}
