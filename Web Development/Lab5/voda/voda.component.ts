import { Component, OnInit } from '@angular/core';
import { voda }  from   '../cars1';

@Component({
  selector: 'app-voda',
  templateUrl: './voda.component.html',
  styleUrls: ['./voda.component.css']
})
export class VodaComponent implements OnInit {
  voda=voda;
  constructor() { }

  ngOnInit(): void {
  }

}
