import { BaseModel } from "./BaseModel";

export class Seller extends BaseModel {
   name:string;
   phone:string;
   cin:string;
   city:string;
   pivot:{purchase_id:string,seller_id}

}