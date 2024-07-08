import {Component, Output} from '@angular/core';

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


  onSubmit() {
    // this.list.push(this.email)
    // this.list.push(this.password)
    this.isSubmitted = true;
    this.list.push({"email": this.email,  "password": this.password})

  }

  deleteCard(index: number) {
    this.list.splice(index, 1);
  }
}
