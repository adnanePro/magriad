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
    this.months = [
      {name:'1 Mois',value:1},
      {name:'3 Mois',value:3},
      {name:'6 Mois',value:6},
      {name:'9 Mois',value:9},
      {name:'Une année ',value:12},
      {name:'2 années ',value:24},
      {name:'3 années ',value:36}];
  }
  getDashboard(){

    
    this.dashbordService.getDadhboard(this.selectedMonth).subscribe(data=>{
      this.dashboard = data;
    })
  }
}
