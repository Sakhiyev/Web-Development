import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CarsComponent } from './cars/cars.component';
import { ProductsComponent } from './products/products.component';
import { MotoComponent } from './moto/moto.component';
import { VodaComponent } from './voda/voda.component';
import { PodatComponent } from './podat/podat.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'categories', pathMatch: 'full'},
  {path: 'categories', component:CategoriesComponent},
  {path: 'categories/1/products', component: CarsComponent},
  {path: 'product/:id', component: ProductsComponent},
  {path: 'categories/2/products', component: MotoComponent},
  {path: 'categories/3/products', component: VodaComponent},
  {path: 'podat', component: PodatComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CarsComponent,
    ProductsComponent,
    MotoComponent,
    VodaComponent,
    PodatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
