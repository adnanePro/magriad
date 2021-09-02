import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/config/models/Product';
import { Seller } from 'src/app/config/models/Seller';
import { ProductService } from 'src/app/config/services/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  @Input() seller:Seller;
  products:Product[];
 @Output() count:EventEmitter<number> =new EventEmitter(); 
 loading=true;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getByPurchaseAndSeller(this.seller.id,this.seller.pivot.purchase_id).subscribe(products=>{
      this.products = products;
      this.loading=false;
      this.count.emit(this.products.length);
    })
  }

}
