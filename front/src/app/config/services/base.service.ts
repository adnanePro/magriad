import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected controller: any;
  constructor(protected http: HttpClient){}

 protected   network() {
    return `${environment.network}${this.controller}/`;
  }

  protected constractPath(...params){
    let path = environment.network;
    params.map(str=>{
      path+=`${str}/`
    })
    return path;
  }
}
