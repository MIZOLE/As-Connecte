import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [

{ path: 'signin', component: SigninComponent },

 { path: '', redirectTo: 'products', pathMatch: 'full'},

 {path: 'products', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
