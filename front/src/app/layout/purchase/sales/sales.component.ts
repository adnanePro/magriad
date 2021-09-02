import { Component, Input, OnInit } from '@angular/core';
import { Sale } from 'src/app/config/models/Sale';
import { SaleService } from 'src/app/config/services/sale.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  sales:Sale[];
  loading=true;
  @Input() purchaseId;
  constructor(private saleService:SaleService) { 
  }
  
  
  ngOnInit(): void {
    this.getSales()
  }
  private getSales(){
    this.saleService.getByPurchase(this.purchaseId).subscribe((data:Sale[])=>{
      this.sales = data.map(sale=>{
        return new Sale().make(sale);
      })
      this.loading=false;
    })
  }

}
