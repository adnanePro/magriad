import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CrudService {
  protected controller = 'category';

  
}
