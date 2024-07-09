import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent{

  constructor(private activatedRoute: ActivatedRoute) {
    this.param = this.activatedRoute.snapshot.params['username'];
    this.QueryParam = this.activatedRoute.snapshot.queryParams['course'];
  }

  param: any;
  QueryParam: any;

}
