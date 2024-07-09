import {Component, Output} from '@angular/core';
import {MyFirstService} from "../services/my-first.service";

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.scss'
})
export class MyFirstCompComponent {
  email: string = '';
  password: string = '';
  list: any = [];
  isSubmitted: boolean = false;

  constructor(private service: MyFirstService) {
    this.list = this.service.getAllMessages();
    this.isSubmitted = this.list.length > 0;
  }


  onSubmit() {
    // this.list.push(this.email)
    // this.list.push(this.password)
    this.isSubmitted = true;
    this.service.insert({"email": this.email,  "password": this.password});

  }

  deleteCard(index: number) {
    this.service.deleteMessage(index);
  }
}
