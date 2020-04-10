import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from '../app/log-in/log-in.component';
import { SignUpComponent } from '../app/sign-up/sign-up.component';
import { MainPageComponent } from './main-page/main-page.component';
import {BearDetailsComponent} from './bear-details/bear-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {ProfileDetailComponent} from './profile-detail/profile-detail.component';
import {MyBearsComponent} from './my-bears/my-bears.component';
import {SavedBearsComponent} from './saved-bears/saved-bears.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'signup', component: SignUpComponent},
  { path: 'login', component: LogInComponent},
  { path: 'main', component: MainPageComponent},
  { path: 'bear/:bearId/details', component: BearDetailsComponent},
  { path: 'profile', component: UserProfileComponent},
  { path: 'profile/details', component: ProfileDetailComponent},
  { path: 'profile/my-bears', component: MyBearsComponent},
  { path: 'profile/saved-bears', component: SavedBearsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
