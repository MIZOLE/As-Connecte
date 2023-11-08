import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResellerService } from 'src/services/reseller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  show:any




  constructor(
    private _resellerService: ResellerService,
    private _router: Router,
    private el: ElementRef
  ) {}

  signInForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  sign_up(){
    //this.container.classList.add  = "sign-up-mode"
   this.show = "sign-up-mode"
  }

  sign_in(){
    this.show = ""
  }

  signIn() {
    this._resellerService.signIn(this.signInForm.value);
  }
}
