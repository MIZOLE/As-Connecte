import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { VoucherloadedService } from 'src/services/voucherloaded.service';

@Component({
  selector: 'app-loadvoucher',
  templateUrl: './loadvoucher.component.html',
  styleUrls: ['./loadvoucher.component.scss'],
})
export class LoadvoucherComponent implements OnInit {
  loadVoucherField: FormGroup = new FormGroup({
    voucher: new FormControl('', Validators.required),
  });
  private startTime!: number;
  private readonly countdownDuration = 60 * 60 * 1000;

  constructor(private _voucherService: VoucherloadedService) {}

  message?: string;
  isLoaded: any = false;
  oneDayVouchers = ['123456789123', '123456789124', '123456789125'];
  // threeDaysVouchers = ['123456789126', '123456789127', '123456789128'];
  // sevenDaysVouchers = ['123456789133', '123456789144', '123456789155'];

  days: any = 0;
  hours: any = 0;
  minutes: any = 0;
  seconds: any = 0;

  ngOnInit(): void {

    const storedTime = Number(localStorage.getItem("timerExpiration"));
    const now = localStorage.getItem('now');

    if (storedTime) {
      this.startTime = Number(storedTime);
      console.log(now)
      //this.resumeCountdown();
      console.log(this.startTime)
    } else {
      // Step 1: Start a new countdown
      this.startTime = new Date().getTime();
      //localStorage.setItem('countdownStartTime', this.startTime.toString());
      console.log(storedTime)
    
    }


  //this.resumeTime()
  }


   resumeCountdown1() {
    setInterval(() => {
      // Step 3: Calculate remaining time and update display
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - this.startTime;
      const remainingTime = this.countdownDuration - elapsedTime;

      this.days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    }, 1000);
  }
  isTimerExpired: boolean = false;

  resumeCountdown() {
    setInterval(() => {
      
      // Step 3: Calculate remaining time and update display
      const currentTime = new Date().getTime();
      const elapsedTime = Number(currentTime - this.startTime);
      const remainingTime = Number(this.countdownDuration - elapsedTime);

      this.days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
      console.log(typeof(this.seconds ))
      localStorage.setItem('countdownStartTime', JSON.stringify(this.startTime));
    }, 1000);
  }

  getOneDayVoucher() {

    const date = new Date().toDateString().split(' ');
    const getHours = new Date().getHours();
    const getMinutes = new Date().getMinutes();
    const getSeconds = new Date().getSeconds();

    const countDownDate = new Date(
      `Nov ${parseInt(date[2]) + 1}, 2023 ${getHours}:${getMinutes}:${getSeconds}`
    ).getTime();


  
    setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDiff = countDownDate - currentTime;
  
      //update time remaning
      this.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      // Check if the timer has expired
      this.isTimerExpired = timeDiff <= 0;
            
      // Update sessionStorage with the remaining time
      localStorage.setItem('timerExpiration', timeDiff.toString());
      localStorage.setItem('now',Date());
      
    }, 
    1000);
  }

  resumeTime(){
    const storedTimeDiff = localStorage.getItem('timerExpiration');
    if(storedTimeDiff){
      const timeDiff = parseInt(storedTimeDiff, 10);

      //call getOnedayVoucher with remaining time
      this.getOneDayVoucher();
    } else {
      //start a new timer if no stored time
      this.getOneDayVoucher();
    }
  }


  // clearTimeInteval(){
  //   //clea the interval when the component is distroyed
  //   if(this.)
  // }

  loadVoucher() {
   let array = []
    const { voucher } = this.loadVoucherField.value;

    this.message = this._voucherService.invalidVoucher(voucher);

    if (this.isLoaded === false) {
      if (
        this.oneDayVouchers.includes(voucher)
        
      ) {
        this.message = 'Succesfully loaded';
        this.isLoaded = true;
        
        if (this.oneDayVouchers.includes(voucher)) {
          this.getOneDayVoucher();
          //this.resumeCountdown1()
        } 
      }
    } else if (this.isLoaded === true) {
      this.loadVoucherField;
      array.push(this.isLoaded)
      window.location.href = 'https://www.google.com/';
    }
  }
}
