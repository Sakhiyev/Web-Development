import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(
    private categoryService: CategoryService
  ) {
  }

  ngOnInit() {
  }

  logIn() {
    this.categoryService.triggerOnMyButton();
  }

}
