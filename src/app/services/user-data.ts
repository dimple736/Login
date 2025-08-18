// user-data.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private users = new BehaviorSubject<any[]>([]);
  users$ = this.users.asObservable(); 

  addUser(user: any) {
    const currentUsers = this.users.getValue();
    this.users.next([...currentUsers, user]);
  }
setUsers(userList: any[]) {
    this.users.next(userList);}
  getUsers() 
  {
    return this.users.getValue(); 
  }
}
