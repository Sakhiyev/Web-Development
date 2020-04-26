import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../category.service';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  username = '';
  password = '';
  logged = false;

  constructor(
    private categoryService: CategoryService,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
      this.router.navigate(['/main']);
      this.categoryService.triggerOnMyButton();
    }
  }

  logIn() {
    this.userService.login(this.username, this.password)
      .subscribe(res => {
        localStorage.setItem('token', res.token);
        this.logged = true;
        this.username = '';
        this.password = '';
        this.categoryService.triggerOnMyButton();
      });
  }

  logout() {
    localStorage.clear();
    this.logged = false;
  }

}