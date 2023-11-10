import { Component } from '@angular/core';
// import 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor () {}

  counter = 0;

  increment() {
    this.counter++;
  }
}
