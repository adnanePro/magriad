import { BaseModel } from "./BaseModel";
import { Category } from "./Category";

export class Product extends BaseModel {
   name:string;
   qte:any=1;
   purshasePrice:any;
   purchase_id:any;
   category_id:any;
   seller_id:any;
   product_id?:any;
   category:Category

   getTotal(){
       return this.qte*this.purshasePrice;
   }

}