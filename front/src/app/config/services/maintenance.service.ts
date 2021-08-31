import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Maintenance } from '../models/Maintenance';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService extends  CrudService {
  protected controller ="maintenance";

  getByPurchase(purchase_id){
    const url =this.constractPath(this.controller,'get-by-purchase');
    return this.http.post<Maintenance[]>(url,{purchase_id:purchase_id}).pipe(map(maintenances=>{
      return maintenances.map(maintenance=>{ return new Maintenance().make(maintenance) })
    }))
  }
}
