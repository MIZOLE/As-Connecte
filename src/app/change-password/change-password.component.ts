import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResellerService } from 'src/services/reseller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  constructor(
    private _resellerService: ResellerService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    console.log(this._resellerService.getToken())
  }

  hide = true;

  changePasswordForm: FormGroup = new FormGroup({
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confirmNewPassword: new FormControl('', Validators.required),
  });

  changePassword() {
    const { oldPassword, newPassword, confirmNewPassword } =
      this.changePasswordForm.value;

    if (oldPassword !== '123') {
      console.log('wrong password');
      return;
    } else if (newPassword !== confirmNewPassword) {
      console.log("passwords don't match");
      return;
    }

    this._resellerService
      .changePassword('6552235ddbe41e537c64a018', this.changePasswordForm.value)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: () => console.error(),
      });
  }

  cancel() {
    console.log('false');
    return
  }
}
