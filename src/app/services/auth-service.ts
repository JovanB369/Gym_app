import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(`${this.apiUrl}/register`, user); 
  }

  login(user: User) {
    return this.http.post(`${this.apiUrl}/login`, user); 
  }

  getUserData(){
    const token = localStorage.getItem('users-token'); 
    if (!token) return null; 
    const tokenParts = token.split('.'); 
    const userDatapart = tokenParts[1]; 
    const user = JSON.parse(window.atob(userDatapart)); 
    return user;
  }


  isLoggedIn(){
    const token = localStorage.getItem('users-token'); 
    if (token) return true; 
    return false; 
  }

  isAdmin(){
    const token = localStorage.getItem('users-token'); 
    if (!token) return null; 
    const tokenParts = token.split('.'); 
    const userDatapart = tokenParts[1]; 
    const user = JSON.parse(window.atob(userDatapart)); 
    return user.isAdmin
  }

 
}