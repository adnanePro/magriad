import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { FormsComponent } from '../pages/forms/forms.component';
import { MapsComponent } from '../pages/maps/maps.component';
import { NotificationsComponent } from '../pages/notifications/notifications.component';
import { TablesComponent } from '../pages/tables/tables.component';
import { TypographyComponent } from '../pages/typography/typography.component';
import { LayoutComponent } from './layout.component';
import { SellerComponent } from './seller/seller.component';

const routes: Routes = [{ path: '', component: LayoutComponent ,children:[
{ path: '',   redirectTo: '/dashboard', pathMatch: 'full'},
{ path: 'forms', component: FormsComponent},
{ path: 'tables', component: TablesComponent},
{ path: 'typography', component: TypographyComponent},
{ path: 'maps', component: MapsComponent},
{ path: 'categories', component: CategoriesComponent},
{ path: 'sellers', component: SellerComponent},
{ path: 'notifications', component: NotificationsComponent},
{ path: 'purchase', loadChildren: () => import('./purchase/purchase.module').then(m => m.PurchaseModule) },
{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
]},
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
