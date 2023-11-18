import { Component, OnInit } from '@angular/core';
import { ResellerService } from 'src/services/reseller.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-wifi-profile',
  templateUrl: './view-wifi-profile.component.html',
  styleUrls: ['./view-wifi-profile.component.scss']
})
export class ViewWifiProfileComponent implements OnInit{

  constructor(private _resellerService: ResellerService){}
  



  wifiDetails?: any;

  
  
  ngOnInit(): void {
    this.getAllWifiDetails();
    
  }

  getAllWifiDetails(): void {
    this._resellerService.getWifiDetails().subscribe({
      next: (res) => {
        this.wifiDetails = res
      },
      error: () => console.log()
    })
  }

  removeWifi(id: any): void {
    if(window.confirm('Are sure you want to delete this item ?')){
    console.log(id)
     }
    // this._courseService.deleteCourse(id).subscribe({
    //   next: () => {
    
    //     this.getAllCourses();
    //   },
    //   error: console.log,
    // });
  }

}
