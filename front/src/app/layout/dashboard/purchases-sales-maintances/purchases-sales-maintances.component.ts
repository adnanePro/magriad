import { AfterContentChecked, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ChartService } from 'src/app/config/services/chart.service';

@Component({
  selector: 'app-purchases-sales-maintances',
  templateUrl: './purchases-sales-maintances.component.html',
  styleUrls: ['./purchases-sales-maintances.component.css']
})
export class PurchasesSalesMaintancesComponent implements OnInit {
  basicData: { labels: string[]; datasets: { label: string; data: number[]; fill: boolean; borderColor: string; tension: number; }[]; };
  @Input() data;
  constructor(private chartService:ChartService) { }
  
  ngOnChanges(changes: SimpleChanges) {
        
   this.constractData()
}

  ngOnInit(): void {
    this.constractData()

  }
  
  private constractData(){
    this.data = 
    this.basicData = {
      labels: this.chartService.getName(this.data),
      datasets: [
          {
              label: 'Vents',
              data: this.chartService.getValues(this.data,"sales"),
              fill: false,
              borderColor: '#00FF00',
              tension: .4
          },
          {
            label: 'Achats',
            data: this.chartService.getValues(this.data,"purchases"),
            fill: false,
            borderColor: '#0000FF',
            tension: .4
        },
        {
          label: 'Maintenance',
          data: this.chartService.getValues(this.data,"maintenances"),
          fill: false,
          borderColor: '#FF0000',
          tension: .4
      },
         
      ]
  };
  }
  

}
