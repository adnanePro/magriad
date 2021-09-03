import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/config/models/Sale';
import { Seller } from 'src/app/config/models/Seller';
import { SaleService } from 'src/app/config/services/sale.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  sales:Sale[];
  display=false;
  loading=true
  constructor(private saleService:SaleService) { 
    this.getSales()
  }

  ngOnInit(): void {
  }
  public getSales(){
    console.log('recerved');
    this.saleService.getAll().subscribe((data:Sale[])=>{
      this.sales = data.map(sale=>{
        return new Sale().make(sale);
      })
      
      this.loading=false;
      this.display=false;
    })
  }

}
