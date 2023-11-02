import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
const routes: Routes = [
  
 { path: '', redirectTo: 'signup', pathMatch: 'full'},

 {path: 'products', component: ProductsComponent},

 {path: 'signup', component: SignupComponent},

 {path: 'signin', component: SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
