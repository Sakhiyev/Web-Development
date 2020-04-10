import { Component, OnInit } from '@angular/core';
import { mockUser} from '../mock-users';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  user = mockUser;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
  }
  logOut() {
    this.categoryService.triggerOnMyButton();
  }


}
