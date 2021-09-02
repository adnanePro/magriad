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
    return this.http.post<Sale[]>(url,{purchase_id:purchase_id}).pipe(map(maintenances=>{
      return maintenances.map(maintenance=>{ return new Sale().make(maintenance) })
    }))
  }
}
