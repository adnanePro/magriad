import { BaseModel } from "./BaseModel";
import { Category } from "./Category";
import { Maintenance } from "./Maintenance";

export class Product extends BaseModel {
   name:string;
   qte:any=1;
   purshasePrice:any;
   purchase_id:any;
   category_id:any;
   seller_id:any;
   product_id?:any;
   category:Category
   charges:any;
   unitPrice:any;
   maitenances:Maintenance;
   percentage:any;
   quantityIniale:any;
   maintenanceCost:any;

   getTotal(charge=false){
       const val = charge ? this.charges : 0;
       const maitenances = charge ? this.maintenanceCost : 0;
       const rest = val+maitenances;
       return this.qte*this.purshasePrice+rest;
   }

}