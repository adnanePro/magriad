import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class SellerService extends CrudService {

  protected controller ="seller";
}
