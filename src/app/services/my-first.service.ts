import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  list: any = [];

  constructor() { this.init(); }

  init(): void {
    this.insert({
      email: 'a1st',
      password: '3477'
    });
    this.insert({
      email: 'abdo',
      password: '7590'
    });
    this.insert({
      email: 'khalid',
      password: '0000'
    });
  }

  insert(message: {email: string, password: string}) {
    this.list.push(message);
  }

  getAllMessages() {
    return this.list;
  }
  deleteMessage(index: number){
    this.list.splice(index, 1);

  }
}
