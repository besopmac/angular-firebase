import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  usersRef: AngularFireList<any>;
  userRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // create user
  AddUser(user: User) {
    this.usersRef.push({
      name: user.name,
      email: user.email,
      contact: user.contact
    });
  }

  // read user
  GetUser(id: string) {
    this.userRef = this.db.object('users-list/' + id);
    return this.userRef;
  }

  // read users list
  GetUsersList() {
    this.usersRef = this.db.list('users-list');
    return this.usersRef;
  }

  // update user
  UpdateUser(user: User) {
    this.userRef.update({
      name: user.name,
      email: user.email,
      contact: user.contact
    });
  }

  // delete user
  DeleteUser(id: string) {
    this.userRef = this.db.object('users-list/' + id);
    this.userRef.remove();
  }
}
