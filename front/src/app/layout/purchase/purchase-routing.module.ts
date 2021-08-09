import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NewPurchaseComponent } from './new-purchase/new-purchase.component';
import { PurchaseComponent } from './purchase.component';

const routes: Routes = [{ path: '', component: PurchaseComponent,children:[
  {path:'list',component:ListComponent},
  {path:'new/:id',component:NewPurchaseComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
