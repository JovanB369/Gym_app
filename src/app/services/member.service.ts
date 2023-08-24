import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  apiUrl = environment.API_URL

  constructor(private http: HttpClient) { }
  getAllUsers() {
    return this.http.get<User[]>(`${this.apiUrl}/user`);
  }

  getUserByID(id: number){
    return this.http.get<User>(`${this.apiUrl}/user/${id}`); 
  }

  insertUserDataManually(user: User) {
    return this.http.post(`${this.apiUrl}/user`, user);
  }

  updateUserData(user: User) {
    return this.http.put(`${this.apiUrl}/user/${user.id}`, user); 
  }

  deleteUser(id: number){
    return this.http.delete(`${this.apiUrl}/user/${id}`); 
  }


}
