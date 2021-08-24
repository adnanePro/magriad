import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TablesComponent } from './pages/tables/tables.component';
import { FormsComponent } from './pages/forms/forms.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { MapsComponent } from './pages/maps/maps.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';

const routes: Routes = [
  
  { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
