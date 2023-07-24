import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../models/Member';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  apiUrl = environment.API_URL

  constructor(private http: HttpClient) { }
  getAllMembers() {
    return this.http.get<Member[]>(`${this.apiUrl}/member`);
  }

  getMemberByID(id: number){
    return this.http.get<Member>(`${this.apiUrl}/member/${id}`); 
  }

  insertMember(member: Member) {
    return this.http.post(`${this.apiUrl}/member`, member);
  }

  updateMember(member:Member) {
    return this.http.put(`${this.apiUrl}/member/${member.id}`, member); 
  }

  deleteMember(id: number){
    return this.http.delete(`${this.apiUrl}/member/${id}`); 
  }


}
