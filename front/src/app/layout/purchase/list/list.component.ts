import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Purchase } from 'src/app/config/models/Purchase';
import { PurchaseService } from 'src/app/config/services/purchase.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  purchases:Purchase[];
  purchase:Purchase = new Purchase();
  buttonLabel:string;
  display=false;
  constructor(private purchaseService:PurchaseService,private confirmationService: ConfirmationService,private router:Router) {
    this.getPurchases();
   }

  ngOnInit(): void {
  }

  updateOrCreate(){
    this.purchaseService.updateOrCreate(this.purchase).subscribe((purchase:Purchase)=>{
      this.router.navigate(['/purchase/new',purchase.id]);
      this.getPurchases();
      this.display=false;
    })
  }
  openDialog(){
    this.purchase = new Purchase();

    this.display=true;
  }
  private getPurchases(){
    this.purchaseService.getAll().subscribe((data:Purchase[])=>{
      this.purchases = data;
    })
  }
  edit(e){
    this.purchase = new Purchase().make(e);
    this.display=true;
  }
  delete(purchase: Purchase) {
    this.confirmationService.confirm({
      message: 'Voulez vous vraiment supprimer cet element',
      accept: () => {

        this.purchaseService.delete(purchase).subscribe(()=>{
          this.getPurchases();
        })
      },
    });
  }
}
