import { Component, OnInit } from '@angular/core';
import { ResellerService } from 'src/services/reseller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  constructor (private _resellerService: ResellerService, private _router: Router) {}

  

  ngOnInit(): void {
    if (!this._resellerService.getIsAuthenticated()) {
      this._router.navigate(['/'])
    }
  }
  counter = 0;

  increment() {
    this.counter++;
  }
}
