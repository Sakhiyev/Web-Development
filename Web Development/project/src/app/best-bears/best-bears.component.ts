import { Component, OnInit } from '@angular/core';
import {BearService} from '../bear.service';
import {Bear} from '../bear';
@Component({
  selector: 'app-best-bears',
  templateUrl: './best-bears.component.html',
  styleUrls: ['./best-bears.component.css']
})
export class BestBearsComponent implements OnInit {
  bears: Bear[];
  constructor(private bearService: BearService) { }

  ngOnInit(): void {
    this.bearService.getTopThree().subscribe(
      bears => this.bears = bears
    );
  }
}
