import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class SaleService extends CrudService {
  protected controller ="sale";
}
