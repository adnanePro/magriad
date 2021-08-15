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
  constructor(private purchaseService:PurchaseService,
    private activatedRoute:ActivatedRoute) { 
this.activatedRoute.params.subscribe(params=>{
  this.purchaseService.getById(params.id).subscribe((purchase:Purchase)=>{
    console.log(purchase.sellers);
    
    this.purchase = new Purchase().make(purchase); 
  })
})}

  ngOnInit(): void {
  }

}
