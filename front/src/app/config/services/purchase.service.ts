import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService extends CrudService {

  protected controller ='purchase'
  
}
