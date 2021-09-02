import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { NewSeleComponent } from './new-sele/new-sele.component';
import { FormsModule } from '@angular/forms';
import { SalesComponent } from './sales/sales.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    ProductsComponent,
    NewSeleComponent,
    SalesComponent,
    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    ProductsRoutingModule,
    DialogModule,
    FormsModule,
    TableModule
  ]
})
export class ProductsModule { }
