import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-loadvoucher',
  templateUrl: './loadvoucher.component.html',
  styleUrls: ['./loadvoucher.component.scss']
})
export class LoadvoucherComponent implements OnInit{

  loadVoucherField: FormGroup = new FormGroup({
    voucher: new FormControl("", Validators.required)
  })
  
  ngOnInit(): void {
    
  }

  loadVoucher() {

    this.loadVoucherField.value.voucher= ''
    
  }

  clear(){
    
  }
}
