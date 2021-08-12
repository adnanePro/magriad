import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { take } from 'rxjs/operators';
import { Purchase } from 'src/app/config/models/Purchase';
import { Seller } from 'src/app/config/models/Seller';
import { PurchaseService } from 'src/app/config/services/purchase.service';
import { SellerService } from 'src/app/config/services/seller.service';

@Component({
  selector: 'app-new-purchase',
  templateUrl: './new-purchase.component.html',
  styleUrls: ['./new-purchase.component.css']
})
export class NewPurchaseComponent implements OnInit {
  purchase:Purchase;
  selles:Seller[];
  selleSelected:Seller;
  displaySeller:boolean=false;
  selleschossed:Seller[]=[];
  constructor(private purchaseService:PurchaseService,
              private sellerService:SellerService, 
              private activatedRoute:ActivatedRoute) { 
  this.activatedRoute.params.subscribe(params=>{
    forkJoin(this.purchaseService.getById(params.id),this.sellerService.getAll()).subscribe(data=>{
      this.purchase = new Purchase().make(data[0]);
      this.selles = data[1] as Seller[];
      this.selleschossed = this.purchase.sellers;
    })
  })              

  }

  ngOnInit(): void {

  }

  addSeller(){
   this.selleschossed.push(this.selleSelected);
   this.displaySeller = false;
   this.selleSelected = new Seller();
    
  }

}
