import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { User } from '../_models/user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http= inject(HttpClient);
  baseUrl ='https://localhost:5001/api/';
currentUser = signal<User | null>(null);

  login(modul:any) { 
    return this.http.post<User>(this.baseUrl + 'account/login',modul).pipe(
      map(user =>{
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUser.set(user);
        }
      })
    )
  }

  register(modul:any) { 
    return this.http.post<User>(this.baseUrl + 'account/register',modul).pipe(
      map(user =>{
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUser.set(user);
        }
        return user;
      })
    )
  }


  logout(){
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
