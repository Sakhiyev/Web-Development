import { Component, OnInit } from '@angular/core';
import { moto }  from   '../cars1';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css']
})
export class MotoComponent implements OnInit {
  moto=moto;
  constructor() { }

  ngOnInit(): void {
  }

}
