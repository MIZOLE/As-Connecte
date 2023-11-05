import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { LoadvoucherComponent } from './loadvoucher/loadvoucher.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

import { DashboardComponent} from './dashboard/dashboard.component';
const routes: Routes = [
  { path: '', redirectTo: 'change-password', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },

  { path: 'dashboard', component: DashboardComponent },


  { path: 'products', component: ProductsComponent },

 {path: 'signup', component: SignupComponent},

  { path: 'signin', component: SigninComponent },

  { path: 'loadvoucher', component: LoadvoucherComponent },
  { path: 'change-password', component: ChangePasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
