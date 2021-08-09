import { BaseModel } from "./BaseModel";

export class Purchase extends BaseModel {
    datePurchase:any;
    city:string;
    transport:any
    fillUp:any
    strip:any;
    price:any;
    status:boolean;
    charges:any;

    getTotal(){
        return this.charges + this.price;
    }
}