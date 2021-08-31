import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ProductsComponent } from './products.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  {path:'sales',component:SalesComponent},
  {path:'maintenance',component:MaintenanceComponent}
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
