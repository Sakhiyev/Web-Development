import {Component, OnInit} from '@angular/core';
import {List} from '../list';
import { mockUser} from '../mock-users';

@Component({
  selector: 'app-saved-bears',
  templateUrl: './saved-bears.component.html',
  styleUrls: ['./saved-bears.component.css']
})
export class SavedBearsComponent implements OnInit {
  savedBears=mockUser.saved_bears;

  constructor() {
  }

  ngOnInit(): void {
  }

}
