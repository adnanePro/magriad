import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import {map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudService {

  protected controller ="product";

  public getByPurchaseAndSeller(seller_id,purchase_id):Observable<Product[]>{
     const url =this.constractPath(this.controller,'get-by-seller-and-purchase');
    return this.http.post<Product[]>(url,{purchase_id:purchase_id,seller_id:seller_id}).pipe(map(products=>{
      return products.map(product=>{ return new Product().make(product) })
    }))
  }
  // get-product-in-stock
  public getProductsInStock():Observable<Product[]>{
    const url =this.constractPath(this.controller,'get-product-in-stock');
   return this.http.get<Product[]>(url).pipe(map(products=>{
     return products.map(product=>{ return new Product().make(product) })
   }))
 }
}
