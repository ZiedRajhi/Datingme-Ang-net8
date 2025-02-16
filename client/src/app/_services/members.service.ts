import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';

import { environment } from '../../environments/environment';
import { Member } from '../_models/member';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private http = inject(HttpClient);

  baseUrl = environment.apiUrl.endsWith('/') ? environment.apiUrl : environment.apiUrl + '/';
  memebers = signal<Member[]>([]);

  getMembers() {
    return this.http.get<Member[]>(this.baseUrl + 'users').subscribe({
      next: memebers => this.memebers.set(memebers)
    })

  }

  getMember(username: string) {
    const member = this.memebers().find(x => x.userName === username);
    if (member !== undefined) return of(member);
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }

  updateMember(member: Member) {
    return this.http.put(this.baseUrl + 'users', member).pipe(
      tap(() =>{
        this.memebers.update(memebers =>memebers.map(m =>m.userName===member.userName
          ? member : m))
      })
    )
  }

}
