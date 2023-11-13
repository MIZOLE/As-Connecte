import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VoucherloadedService {
  constructor() { }

  invalidVoucher(voucher: any) {
    let message;
    if (voucher.length < 12 || (voucher.length > 12 && voucher.length > 0)) {
      message = 'The voucher must be 12 digits long!'
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  inavlidVoucher(voucher: any) {
    if (voucher.length > 0 && voucher.length < 12 || voucher.length > 12) {
      this._snackBarService.openSnackBar(
        'The voucher must be 12 digits long!',
        'FAILED'
      );
    } else if (voucher.length === 0) {
      message = 'Please enter the voucher number!'
    } else if (/[^\d]/.test(voucher)) {
      message = 'The voucher must contain digits only!'
    }
    return message
  }

}
