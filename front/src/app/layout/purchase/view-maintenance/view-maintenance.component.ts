import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { Maintenance } from 'src/app/config/models/Maintenance';
import { MaintenanceService } from 'src/app/config/services/maintenance.service';

@Component({
  selector: 'app-view-maintenance',
  templateUrl: './view-maintenance.component.html',
  styleUrls: ['./view-maintenance.component.css']
})
export class ViewMaintenanceComponent implements OnInit,AfterContentChecked {
  @Input() purchaseId;
  public maintenances:Maintenance[];
  constructor(private maintenanceService:MaintenanceService) { }
  ngAfterContentChecked(): void {
  }
  
  ngOnInit(): void {
    this.maintenanceService.getByPurchase(this.purchaseId).subscribe(data=>{
      this.maintenances = data;
    })
  }

}
