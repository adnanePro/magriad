import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/config/models/Category';
import { CategoryService } from 'src/app/config/services/category.service';
import { ChartService } from 'src/app/config/services/chart.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  basicData: { labels: string[]; datasets: { label: string; backgroundColor: string; data: number[]; }[]; };
  basicOptions: any;
  categories:Category[];
  constructor(private categoryService:CategoryService,private chartService:ChartService) { 
      this.categoryService.getAll().subscribe((data:Category[])=>{
          this.categories  = data;
          this.basicData = {
            labels: this.chartService.getName(this.categories),
            datasets: [
                {
                    label: 'Les valeurs des catégories en  stock',
                    backgroundColor: '#42A5F5',
                    data: this.chartService.getValues(this.categories,'value')
                }
            ]
        };
      })
  }


  ngOnInit(): void {
   
  
  this.basicOptions = {
    plugins: {
        legend: {
            labels: {
                color: '#495057'
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        },
        y: {
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            },
            beginAtZero: true
        }
    }
};
  }

}
