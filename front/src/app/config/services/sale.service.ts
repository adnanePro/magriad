import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Sale } from '../models/Sale';
import { BaseService } from './base.service';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class SaleService extends CrudService {
  protected controller ="sale";

  getByPurchase(purchase_id){
    const url =this.constractPath(this.controller,'get-by-purchase');
    return this.http.post<Sale[]>(url,{purchase_id:purchase_id}).pipe(map(sales=>{
      return sales.map(sale=>{ return new Sale().make(sale) })
    }))
  }
  getLastFiveSales(){
    const url =this.constractPath(this.controller,'get-last-five-sales');
    return this.http.get<Sale[]>(url).pipe(map(sales=>{
      return sales.map(sale=>{ return new Sale().make(sale) })
    }))
    
  }
}
