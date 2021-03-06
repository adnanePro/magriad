import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChartModule} from 'primeng/chart';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { PurchasesSalesMaintancesComponent } from './purchases-sales-maintances/purchases-sales-maintances.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { LastSalesComponent } from './last-sales/last-sales.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CategoriesComponent,
    PurchasesSalesMaintancesComponent,
    LastSalesComponent,
  ],
  imports: [
    CommonModule,
    ChartModule,
    DashboardRoutingModule,
    SelectButtonModule,
    FormsModule
  ]
})
export class DashboardModule { }
