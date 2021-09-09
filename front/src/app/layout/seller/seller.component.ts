import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Seller } from 'src/app/config/models/Seller';
import { SellerService } from 'src/app/config/services/seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  selleries:Seller[];
  seller:Seller = new Seller();
  buttonLabel:string;
  display=false;
  submitted=false;
  loading=true;
  constructor(private sellerService:SellerService,private confirmationService: ConfirmationService) {
    this.getCategories();
   }

  ngOnInit(): void {
  }

  updateOrCreate(){
    this.submitted = true;
    if(this.seller.isValid()){

       this.sellerService.updateOrCreate(this.seller).subscribe(()=>{
      this.getCategories();
      this.display=false;
      this.submitted = false;
    })
  }
  
  
  
}
openDialog(){
    this.submitted = false;
    this.seller = new Seller();
  this.buttonLabel="Nouveau veunder"
    this.display=true;
  }
  private getCategories(){
    this.sellerService.getAll().subscribe((data:Seller[])=>{
      this.selleries = data;
      this.loading = false;
    })
  }
  edit(e){
    this.seller = new Seller().make(e);
    this.display=true;
  }
  delete(seller: Seller) {
    this.buttonLabel = 'Modification'

    this.confirmationService.confirm({
      message: 'Voulez vous vraiment supprimer cet element',
      accept: () => {

        this.sellerService.delete(seller).subscribe(()=>{
          this.getCategories();
        })
      },
    });
  }


}
