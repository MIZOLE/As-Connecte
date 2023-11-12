import { Injectable } from '@angular/core';
import { SnackBarService } from '../app/snack-bar.service';

@Injectable({
  providedIn: 'root',
})
export class VoucherloadedService {
  constructor(private _snackBarService: SnackBarService) {}

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  inavlidVoucher(voucher: any) {
    if (voucher.length < 12 || (voucher.length > 12 && voucher.length > 0)) {
      this._snackBarService.openSnackBar(
        'The voucher must be 12 digits long!',
        'FAILED'
      );
    } else if (voucher.length === 0) {
      this._snackBarService.openSnackBar(
        'Please enter the voucher number!',
        'FAILED'
      );
    } else if (/[^\d]/.test(voucher)) {
      this._snackBarService.openSnackBar(
        'The voucher must contain digits only!',
        'FAILED'
      );
    }
  }

}
