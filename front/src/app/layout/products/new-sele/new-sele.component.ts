import { AfterContentChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/config/models/Product';
import { Sale } from 'src/app/config/models/Sale';
import { ProductService } from 'src/app/config/services/product.service';
import { SaleService } from 'src/app/config/services/sale.service';

@Component({
  selector: 'app-new-sele',
  templateUrl: './new-sele.component.html',
  styleUrls: ['./new-sele.component.css']
})
export class NewSeleComponent implements OnInit,AfterContentChecked {
  products:Product[];
  @Input() product:Product=new Product();
  saleProduct:Sale=new Sale();
  @Output() created=new EventEmitter<any>();
  constructor(private productService:ProductService,private saleService:SaleService) {
    this.productService.getProductsInStock().subscribe(data=>{
      this.products = data;
    })
   }
  ngAfterContentChecked(): void {
    
   this.saleProduct.product_id = this.product.id;
  }

  ngOnInit(): void {
    
    
  }

  sale(){
      this.saleService.create(this.saleProduct).subscribe(data=>{
        console.log('send');
        
        this.created.emit();
      })
  }

}
