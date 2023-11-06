import { Component, OnInit } from '@angular/core';
import { ResellerService } from 'src/services/reseller.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private _router: Router,
    private _resellerService: ResellerService
  ) {}

  invalidEmail: String = '';
  notPasswordMatch: String = '';

  signUpForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  signUp() {
    if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g.test(this.signUpForm.value.email)) {
      this.invalidEmail = 'Invalid email';
    } else if (
      this.signUpForm.value.password !== this.signUpForm.value.confirmPassword
    ) {
      this.notPasswordMatch = "Passwords don't match";
    }

    this._resellerService.signup(this.signUpForm.value).subscribe({
      next: () => {
        console.log('registered successfully');
        this._router.navigate(['/', 'login']);
      },
      error: () => {
        console.log('User Already Exists', 'Failed');
      },
    });
  }
}
