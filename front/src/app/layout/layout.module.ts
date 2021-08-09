import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { TablesComponent } from '../pages/tables/tables.component';
import { FormsComponent } from '../pages/forms/forms.component';
import { TypographyComponent } from '../pages/typography/typography.component';
import { MapsComponent } from '../pages/maps/maps.component';
import { NotificationsComponent } from '../pages/notifications/notifications.component';
import { CategoriesComponent } from '../categories/categories.component';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {ConfirmationService} from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerComponent } from './seller/seller.component';
import { PurchaseRoutingModule } from './purchase/purchase-routing.module';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TablesComponent,
    FormsComponent,
    TypographyComponent,
    MapsComponent,
    NotificationsComponent,
    CategoriesComponent,
    SellerComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ButtonModule,
    ConfirmDialogModule,
    HttpClientModule,
    FormsModule,
    
    DialogModule
  ],
  providers:[ConfirmationService]

})
export class LayoutModule { }
