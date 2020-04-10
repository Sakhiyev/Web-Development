import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login;
  signup;
  profile;

  constructor(
    private categoryService: CategoryService
  ) {
  }

  ngOnInit() {
    this.categoryService.trigger$.subscribe(() => this.onLogIn());
  }

  onLogIn() {
    this.login = document.getElementById('login');
    this.signup = document.getElementById('signup');
    this.profile = document.getElementById('profile');
    this.login.classList.toggle('setInvisible');
    this.signup.classList.toggle('setInvisible');
    this.profile.classList.toggle('setInvisible');
  }

}
