import { Component, OnInit } from '@angular/core';
import { categories }  from   '../cars1';
import { CatserService } from '../catser.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories=categories;
  category: any;

  constructor() { }

  ngOnInit(): void {
    this.getCategory();
  }
  getCategory(){

  }

}

