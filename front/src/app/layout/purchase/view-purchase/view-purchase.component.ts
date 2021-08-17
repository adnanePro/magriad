import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Purchase } from 'src/app/config/models/Purchase';
import { PurchaseService } from 'src/app/config/services/purchase.service';

@Component({
  selector: 'app-view-purchase',
  templateUrl: './view-purchase.component.html',
  styleUrls: ['./view-purchase.component.css']
})
export class ViewPurchaseComponent implements OnInit {
  purchase:Purchase;
  count_products=0;
  constructor(private purchaseService:PurchaseService,
    private activatedRoute:ActivatedRoute) { 
  this.activatedRoute.params.subscribe(params=>{
  this.purchaseService.getById(params.id).subscribe((purchase:Purchase)=>{
    
    
    this.purchase = new Purchase().make(purchase); 
  })
})}

  ngOnInit(): void {
  }
  setCount(count){
    console.log(count);
    
    this.count_products += count;
  }
}
