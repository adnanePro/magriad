import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';
import { ListComponent } from './list/list.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { NewPurchaseComponent } from './new-purchase/new-purchase.component';
import {AccordionModule} from 'primeng/accordion';
import { AddProductsComponent } from './add-products/add-products.component';

@NgModule({
  declarations: [
    PurchaseComponent,
    ListComponent,
    NewPurchaseComponent,
    AddProductsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    PurchaseRoutingModule,
    ConfirmDialogModule,
    AccordionModule,
    FormsModule,
    
    DialogModule
  ],
  providers:[ConfirmationService]

})
export class PurchaseModule { }
