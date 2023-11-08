import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';import { LoadvoucherComponent } from './loadvoucher/loadvoucher.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },

  { path: 'signup', component: SignupComponent },

  { path: 'signin', component: SigninComponent },
 {path: 'loadvoucher', component: LoadvoucherComponent},
  {path:'body', component: BodyComponent}


 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
