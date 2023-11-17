import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { LoadvoucherComponent } from './loadvoucher/loadvoucher.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BodyComponent } from './body/body.component';
import { SupportComponent } from './support/support.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WifiDetailsComponent } from './wifi-details/wifi-details.component';
import { InfoComponent } from './info/info.component';
import { ReadWifiDetailsComponent } from './read-wifi-details/read-wifi-details.component';
import { ViewWifiProfileComponent } from './view-wifi-profile/view-wifi-profile.component';

import { AboutComponent } from './about/about.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'support', component: SupportComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'signin-signup', component: SigninComponent },
  { path:'body', component: BodyComponent},
  { path: 'loadvoucher', component: LoadvoucherComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'wifi-details', component: WifiDetailsComponent },
  {path: 'info', component:InfoComponent},
  {path: 'read-wifi-details', component:ReadWifiDetailsComponent},
  {path: 'view-wifi-profile', component:ViewWifiProfileComponent},

 {path: 'wifi-details', component: WifiDetailsComponent},

 {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
