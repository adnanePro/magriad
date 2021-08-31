import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Category } from '../config/models/Category';
import { CategoryService } from '../config/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:Category[];
  category:Category = new Category();
  buttonLabel:string;
  loading=true;
  display=false;
  constructor(private categoryService:CategoryService,private confirmationService: ConfirmationService) {
    this.getCategories();
   }

  ngOnInit(): void {
  }

  updateOrCreate(){
    this.categoryService.updateOrCreate(this.category).subscribe(()=>{
      this.getCategories();
      this.display=false;
    })
  }
  openDialog(){
    this.category = new Category();

    this.display=true;
  }
  private getCategories(){
    this.categoryService.getAll().subscribe((data:Category[])=>{
      this.categories = data;
      this.loading=false;
    })
  }
  edit(e){
    this.category = new Category().make(e);
    this.display=true;
  }
  delete(category: Category) {
    this.confirmationService.confirm({
      message: 'Voulez vous vraiment supprimer cet element',
      accept: () => {

        this.categoryService.delete(category).subscribe(()=>{
          this.getCategories();
        })
      },
    });
  }

}
