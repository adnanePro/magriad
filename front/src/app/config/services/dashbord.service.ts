import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseService } from './base.service';
const _ = require('lodash');

@Injectable({
  providedIn: 'root'
})
export class DashbordService extends BaseService {
 protected controller ="dashboard";
  getDadhboard(month?){
  return  this.http.post(this.network(),{month:month}).pipe(map((data:any)=>{
    data.SallesAndPurchasesAndMaintenanceByDay = _.orderBy(data.SallesAndPurchasesAndMaintenanceByDay,'name','asc');
    return data;
  }));
  }
}
