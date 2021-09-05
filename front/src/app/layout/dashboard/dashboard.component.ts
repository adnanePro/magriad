import { Component, OnInit } from '@angular/core';
import { DashbordService } from 'src/app/config/services/dashbord.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboard:any;
  selectedMonth:any=1;
  months:any;
  constructor(private dashbordService:DashbordService) {
    this.getDashboard()
   }

  ngOnInit(): void {
    this.months = [{name:'1 Mois',value:1},{name:'6 Mois',value:6},{name:'12 Mois',value:12}];
  }
  getDashboard(){

    
    this.dashbordService.getDadhboard(this.selectedMonth).subscribe(data=>{
      this.dashboard = data;
    })
  }
}
