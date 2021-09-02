import { BaseModel } from "./BaseModel";
import { Category } from "./Category";

export class Sale extends BaseModel {
    dateSale:string;
   qte:any=1;
   price:any;
   purchase_id:any;
   category_id:any;
   seller_id:any;
   product_id?:any;
   category:Category
   observation:any;
   benefice:any;
  
   percentage:any;

   getTotal(){
       return this.qte*this.price; 
   }

}