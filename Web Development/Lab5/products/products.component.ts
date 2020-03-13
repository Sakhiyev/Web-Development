import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  carsOnPage: any;
  constructor(private route: ActivatedRoute, private carService: CarsService) { }

  ngOnInit(): void {
    this.getCurrentPageCars();        
  }
  getCurrentPageCars() {
    const id = +this.route.snapshot.paramMap.get('id');
    const currentPageNewsObservable = this.carService.getCarsPageById(id);
    currentPageNewsObservable.subscribe(cars => this.carsOnPage = cars);
  }
 
   
}
