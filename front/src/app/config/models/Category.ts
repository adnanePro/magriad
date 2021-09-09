import { BaseModel } from "./BaseModel";

export class Category extends BaseModel {
   name:string
   value:any;
   lastSale:any;
   products_count:any;
   lastPurchase:any;
   protected attributRequired = ['name'];

}