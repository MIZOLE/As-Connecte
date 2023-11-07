import { Component } from '@angular/core';

@Component({
  selector: 'app-wifi-details',
  templateUrl: './wifi-details.component.html',
  styleUrls: ['./wifi-details.component.scss']
})
export class WifiDetailsComponent {
networkName: string = ''; 
securityType: string = '';
networkPassword: string = '';
selectedNetworkBand: string = '';
selectedNetworkMode: string = '';
selectedChannel: string = '';
selectedNetworkEncryption: string = '';
macAddress: string = '';
adminName: string = '';
adminEmail: string = '';
adminPhone: string = '';
additionalInfo: string = '';
configDate: string = '';
signature: string = '';
administratorName: string = '';

submitForm() {
  // Handle form submission, including networkNane and securityType
  console.log('Form submitted with networkName: ' + this.networkName);
  console.log('Security Type: + this.securityType');
  console.log('Network Password/Key: ' + this.networkPassword);
}
}



 

