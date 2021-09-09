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
  submitted=false;
  constructor(private categoryService:CategoryService,private confirmationService: ConfirmationService) {
    this.getCategories();
   }

  ngOnInit(): void {
  }

  updateOrCreate(){
    this.submitted = true;
    if(this.category.isValid()){
       this.categoryService.updateOrCreate(this.category).subscribe(()=>{
      this.getCategories();
      this.display=false;
      this.submitted=false;
    })
    }
   

  }
  openDialog(){
    this.submitted=false;
    this.category = new Category();
    this.buttonLabel = 'Nouveau catégorie'
    this.display=true;
  }
  private getCategories(){
    this.categoryService.getAll().subscribe((data:Category[])=>{
      this.categories = data;
      this.loading=false;
    })
  }
  edit(e){
    this.buttonLabel = 'Modification'

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
