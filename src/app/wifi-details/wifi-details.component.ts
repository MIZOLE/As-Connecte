import { Component, OnInit } from '@angular/core';
import { ResellerService } from 'src/services/reseller.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-wifi-details',
  templateUrl: './wifi-details.component.html',
  styleUrls: ['./wifi-details.component.scss']
})
export class WifiDetailsComponent implements OnInit{

constructor(private _resellerService:ResellerService, private _router:Router){}

wifiDetailsForm:FormGroup = new FormGroup ({
  wifiName: new FormControl("", Validators.required),
  wifiProvider: new FormControl("", Validators.required),
  wifiPassword: new FormControl("", Validators.required),
  wifiSpeed: new FormControl("", Validators.required)
})

  ngOnInit(): void {
    // if(!this._resellerService.getIsAuthenticated())
    // this._router.navigate(['/', "signin-signup"])
  }

submitForm() {
console.log(this.wifiDetailsForm.value)
}
}



 

