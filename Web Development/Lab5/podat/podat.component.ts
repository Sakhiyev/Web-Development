import { Component, OnInit } from '@angular/core';
import { cars }  from   '../cars1';

@Component({
  selector: 'app-podat',
  templateUrl: './podat.component.html',
  styleUrls: ['./podat.component.css']
})
export class PodatComponent implements OnInit {
  cars=cars;
  constructor() { }
  
  ngOnInit(): void {
  }

}
