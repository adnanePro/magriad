import { Component, Input, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Category } from 'src/app/config/models/Category';
import { Product } from 'src/app/config/models/Product';
import { CategoryService } from 'src/app/config/services/category.service';
import { ProductService } from 'src/app/config/services/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  products:Product[];
  categories: Category[];
  product:Product = new Product();
  @Input() purchaseId;
  @Input() sallerId;
  buttonLabel:string;
  loading=true;

  display=false;
  constructor(private productService:ProductService,private confirmationService: ConfirmationService,private categoryService:CategoryService) {
    this.getCategories();
  }
  
  ngOnInit(): void {
    this.getProducts();
  }
  private getCategories(){
    this.categoryService.getAll().subscribe((data:Category[])=>{
      this.categories = data;
      this.loading=false;
    })
  }

  updateOrCreate(){
  this.product.seller_id = this.sallerId;    
  this.product.purchase_id = this.purchaseId;    
    this.productService.updateOrCreate(this.product).subscribe(()=>{
      this.getProducts();
      this.product = new Product();
      this.display=false;
    })
  }
  openDialog(){
    this.product = new Product();

    this.display=true;
  }
  private getProducts(){
    this.productService.getByPurchaseAndSeller(this.sallerId,this.purchaseId).subscribe((data:Product[])=>{
      this.products = data
    })
  }
  edit(e){
    this.product = new Product().make(e);
    this.display=true;
  }
  delete(product: Product) {
    this.confirmationService.confirm({
      message: 'Voulez vous vraiment supprimer cet element',
      accept: () => {

        this.productService.delete(product).subscribe(()=>{
          this.getCategories();
        })
      },
    });
  }

}
