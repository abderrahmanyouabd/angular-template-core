import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.scss'
})
export class MyFirstCompComponent {
  email: string = '';
  password: string = '';
  list: any = [];

  onSubmit() {
    this.list.push(this.email)
    this.list.push(this.password)
  }
}
