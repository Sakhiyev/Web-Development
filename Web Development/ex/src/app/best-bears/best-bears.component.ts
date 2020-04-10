import { Component, OnInit } from '@angular/core';
import { List } from '../list';
@Component({
  selector: 'app-best-bears',
  templateUrl: './best-bears.component.html',
  styleUrls: ['./best-bears.component.css']
})
export class BestBearsComponent implements OnInit {

  bears = [List[0],List[1],List[2]];
  constructor() { }

  ngOnInit(): void {
  }

}
