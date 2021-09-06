import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../models/User';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService{
  protected controller = 'user';

    authenticate(user:User){
    return  this.http.post(`${this.network()}/authentification`,user).pipe(map(token=>{
        sessionStorage.setItem('token',token.toString());
      }));
    }

    user(){
      return  this.http.get(`${this.network()}/authentification`).pipe(map(user=>{
       return new User().make(user);
      }));
    }
    isAuthenticated(){
      return !!sessionStorage.getItem('token');
    }

}
