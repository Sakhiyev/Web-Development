import {Component, OnInit} from '@angular/core';
import {BearService} from '../bear.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  constructor(
    public bearService: BearService
  ) {
  }

  ngOnInit() {
  }

}
