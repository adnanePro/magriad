import { BaseModel } from "./BaseModel";
import { Product } from "./Product";
import { Seller } from "./Seller";

export class Purchase extends BaseModel {
    datePurchase:any;
    city:string;
    transport:any
    fillUp:any
    strip:any;
    price:any;
    status:boolean;
    charges:any;
    sellers:Seller[];
    products:Product[];
    percentage:any;

    getTotal(){
        return this.charges + this.price;
    }
    getStatus(){
      return  this.status ? "Términé" :  "En cours";
    }

}