import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { MainListComponent } from './main-list/main-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { BestBearsComponent } from './best-bears/best-bears.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BearDetailsComponent } from './bear-details/bear-details.component';
import { MyBearsComponent } from './my-bears/my-bears.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { SavedBearsComponent } from './saved-bears/saved-bears.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AllUsersComponent } from './all-users/all-users.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
   declarations: [
      AppComponent,
      SignUpComponent,
      LogInComponent,
      MainListComponent,
      NavbarComponent,
      CategoriesComponent,
      BestBearsComponent,
      MainPageComponent,
      BearDetailsComponent,
      MyBearsComponent,
      ProfileDetailComponent,
      SavedBearsComponent,
      UserProfileComponent,
      AllUsersComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
     ReactiveFormsModule,
     FormsModule
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
