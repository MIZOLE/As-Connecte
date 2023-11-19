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

  constructor(private _voucherService: VoucherloadedService) {}

  message?: string;
  isLoaded: any = false;
  oneDayVouchers = ['123456789123', '123456789124', '123456789125'];
  threeDaysVouchers = ['123456789126', '123456789127', '123456789128'];
  sevenDaysVouchers = ['123456789133', '123456789144', '123456789155'];

  days: any = 0;
  hours: any = 0;
  minutes: any = 0;
  seconds: any = localStorage['seconds'];

  ngOnInit(): void {
    setTimeout(() => {
      this.seconds;
    }, 1000);
  }

  getOneDayVoucher() {
    const date = new Date().toDateString().split(' ');
    const getHours = new Date().getHours();
    const getMinutes = new Date().getMinutes();
    const getSeconds = new Date().getSeconds();

    const countDownDate = new Date(
      `Nov ${
        parseInt(date[2]) + 1
      }, 2023 ${getHours}:${getMinutes}:${getSeconds}`
    ).getTime();

    setInterval(() => {
      const currentTime = new Date().getTime();

      const timeDiff = countDownDate - currentTime;

      this.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      localStorage.setItem('seconds', this.seconds);
    }, 1000);
  }

  getThreeDaysVoucher() {
    const date = new Date().toDateString().split(' ');
    const getHours = new Date().getHours();
    const getMinutes = new Date().getMinutes();
    const getSeconds = new Date().getSeconds();

    const countDownDate = new Date(
      `Nov ${
        parseInt(date[2]) + 3
      }, 2023 ${getHours}:${getMinutes}:${getSeconds}`
    ).getTime();

    setInterval(() => {
      const currentTime = new Date().getTime();

      const timeDiff = countDownDate - currentTime;

      this.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    }, 1000);
  }

  getSevenDaysVoucher() {
    const date = new Date().toDateString().split(' ');
    const getHours = new Date().getHours();
    const getMinutes = new Date().getMinutes();
    const getSeconds = new Date().getSeconds();

    const countDownDate = new Date(
      `Nov ${
        parseInt(date[2]) + 7
      }, 2023 ${getHours}:${getMinutes}:${getSeconds}`
    ).getTime();

    setInterval(() => {
      const currentTime = new Date().getTime();

      const timeDiff = countDownDate - currentTime;

      this.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    }, 1000);
  }

  loadVoucher() {
    const { voucher } = this.loadVoucherField.value;

    this.message = this._voucherService.invalidVoucher(voucher);

    if (this.isLoaded === false) {
      if (
        this.oneDayVouchers.includes(voucher) ||
        this.threeDaysVouchers.includes(voucher) ||
        this.sevenDaysVouchers.includes(voucher)
      ) {
        this.message = 'Succesfully loaded';
        this.isLoaded = true;
        if (this.oneDayVouchers.includes(voucher)) {
          this.getOneDayVoucher();
        } else if (this.threeDaysVouchers.includes(voucher)) {
          this.getThreeDaysVoucher();
        } else if (this.sevenDaysVouchers.includes(voucher)) {
          this.getSevenDaysVoucher();
        }
      }
    } else if (this.isLoaded === true) {
      this.loadVoucherField.reset();
      window.location.href = 'https://www.google.com/';
    }
  }
}
