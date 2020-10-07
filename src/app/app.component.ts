import { Component } from '@angular/core';
import {HomeService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  randomNum = Math.random();
  createResp = {};
  results = {}
  constructor(private appService: HomeService) {};
  title = 'webapp';
  onClickMe() {
    this.randomNum =  Math.random();
    this.appService.getContents().subscribe(res => {
      this.results = res;
    });
    this.createContent();
  }

  createContent() {
    this.appService.createContent({random_number: this.randomNum}).subscribe(res => {
      this.createResp = res;

      this.appService.getContents().subscribe(res => {
        this.results = res;
      });
    })
  }

  ngOnInit() {
    this.appService.getContents().subscribe(res => {
      this.results = res;
    });
  }
}
