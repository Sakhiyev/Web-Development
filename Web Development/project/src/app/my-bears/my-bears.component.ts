import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {mockUser} from '../mock-users';
import {List} from '../list';


@Component({
  selector: 'app-my-bears',
  templateUrl: './my-bears.component.html',
  styleUrls: ['./my-bears.component.css']
})
export class MyBearsComponent implements OnInit {
  savedBears = mockUser.user_bears;
  title = new FormControl('');
  description = new FormControl('');

  constructor() {
  }

  ngOnInit(): void {
  }

  newBear() {

  }
}
