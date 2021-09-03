import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService extends BaseService {


  updateOrCreate(element:any){
    return element.isNewObject() ? this.create(element) : this.update(element) ;
  }



  getById(id) {
    return this.http.get(`${this.network()}/${id}`);
  }
  getAll() {
    return this.http.get(`${this.network()}`);
  }
  create(element: any) {
    return this.http.post(`${this.network()}`, element);
  }
  update(element: any) {
    return this.http.put(`${this.network()}/${element.id}`, element);
  }
  delete(element: any) {
    return this.http.delete(`${this.network()}/${element.id}`);
  }
  
}
