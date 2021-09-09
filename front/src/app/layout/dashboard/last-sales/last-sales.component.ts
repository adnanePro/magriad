import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/config/models/Sale';
import { SaleService } from 'src/app/config/services/sale.service';

@Component({
  selector: 'app-last-sales',
  templateUrl: './last-sales.component.html',
  styleUrls: ['./last-sales.component.css']
})
export class LastSalesComponent implements OnInit {
  sales:Sale[];
  constructor(private saleService:SaleService) {
    this.saleService.getLastFiveSales().subscribe(salles=>{
      this.sales = salles;
    })
   }

  ngOnInit(): void {
  }

}
