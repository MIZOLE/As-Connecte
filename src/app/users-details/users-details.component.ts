import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { ResellerService } from 'src/services/reseller.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss'],
})
export class UsersDetailsComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  private minSubscription!: Subscription;

  public dateNow = new Date();

  number = this._reseller.getNumber();

  constructor(private _reseller: ResellerService) {}

  date = new Date().toDateString().split(' ');
  getHours = new Date().getHours();
  getMinutes = new Date().getMinutes();
  getSeconds = new Date().getSeconds();

  date1 = new Date().toDateString().split(' ');
  getHours1 = new Date().getHours();
  getMinutes1 = new Date().getMinutes();
  getSeconds1 = new Date().getSeconds();

  dDay = new Date(
    `Nov ${parseInt(this.date[2]) + 1}, 2023 ${this.getHours}:${
      this.getMinutes
    }:${this.getSeconds}`
  ).getTime();

  dMinutes = new Date(
    `Nov ${parseInt(this.date[2])}, 2023 ${this.getHours}:${
      this.getMinutes + 2
    }:${this.getSeconds}`
  ).getTime();

  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  public timeDifference: any;
  public minutesDifference: any;
  public secondsToDday: any;
  public minutesToDday: any;
  public hoursToDday: any;
  public daysToDday: any;

  public secondsToDday1: any;
  public minutesToDday1: any;
  public hoursToDday1: any;
  public daysToDday1: any;

  private getTimeDifference() {
    this.timeDifference = this.dDay - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private getMinutesDifference() {
    this.minutesDifference = this.dMinutes - new Date().getTime();
    this.allocateMinutesUnits(this.minutesDifference);
  }

  private allocateTimeUnits(timeDifference: any) {
    this.secondsToDday = Math.floor(
      (timeDifference / this.milliSecondsInASecond) % this.SecondsInAMinute
    );
    this.minutesToDday = Math.floor(
      (timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour)) %
        this.SecondsInAMinute
    );
    this.hoursToDday = Math.floor(
      (timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute)) %
        this.hoursInADay
    );
    this.daysToDday = Math.floor(
      timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute *
          this.hoursInADay)
    );
  }

  private allocateMinutesUnits(timeDifference: any) {
    this.secondsToDday1 = Math.floor(
      (timeDifference / this.milliSecondsInASecond) % this.SecondsInAMinute
    );
    this.minutesToDday1 = Math.floor(
      (timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour)) %
        this.SecondsInAMinute
    );
    this.hoursToDday1 = Math.floor(
      (timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute)) %
        this.hoursInADay
    );
    this.daysToDday1 = Math.floor(
      timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute *
          this.hoursInADay)
    );
  }

  ngOnInit() {
    this.subscription = interval(1000).subscribe(() => {
      this.getTimeDifference();
    });

    this.minSubscription = interval(1000).subscribe(() => {
      this.getMinutesDifference();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
