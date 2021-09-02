import { Component, OnInit } from '@angular/core';
import { Maintenance } from 'src/app/config/models/Maintenance';
import { Product } from 'src/app/config/models/Product';
import { MaintenanceService } from 'src/app/config/services/maintenance.service';
import { ProductService } from 'src/app/config/services/product.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {
  display=false;
  maintenances:Maintenance[]=[];
  products:Product[]=[];
  maintenance:Maintenance=new Maintenance();
  loading=true;
  constructor(private maintenanceService:MaintenanceService,private productService:ProductService) { 
    this.getMaintenances();
    this.getProducts();
  }

  ngOnInit(): void {
  }
  private getProducts(){
    this.productService.getProductsInStock().subscribe(data=>{
      this.products = data;
    })
  } 
  private getMaintenances(){
    this.maintenanceService.getAll().subscribe(data=>{
      this.maintenances = data as Maintenance[]
      this.display=false;
      this.loading=false;
    })

  }
  updateOrCreate(){
    this.maintenanceService.create(this.maintenance).subscribe(()=>{
      this.getMaintenances()
    })
  }
}
