import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { CarComponent } from './car/car.component'; 

import { NgxImageZoomModule } from 'ngx-image-zoom';

const appRoutes: Routes = [
  {path: '', component:TodosComponent},
  {path: 'car', component: CarComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CarComponent
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
