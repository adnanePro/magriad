import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FieldsetModule} from 'primeng/fieldset';
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
import { ViewPurchaseComponent } from './view-purchase/view-purchase.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewMaintenanceComponent } from './view-maintenance/view-maintenance.component';
import { TableModule } from 'primeng/table';
import {ProgressBarModule} from 'primeng/progressbar';
import { SalesComponent } from './sales/sales.component';

@NgModule({
  declarations: [
    PurchaseComponent,
    ListComponent,
    NewPurchaseComponent,
    AddProductsComponent,
    ViewPurchaseComponent,
    ViewProductsComponent,
    ViewMaintenanceComponent,
    SalesComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    PurchaseRoutingModule,
    ConfirmDialogModule,
    AccordionModule,
    FormsModule,
    FieldsetModule,
    TableModule,
    ProgressBarModule,
    DialogModule
  ],
  providers:[ConfirmationService]

})
export class PurchaseModule { }
