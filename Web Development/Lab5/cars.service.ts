import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { All }  from   './cars1';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  serviceCars = All;
  getCarsList(): Observable<string[]> {
    return of(this.serviceCars);
  }  
  getCarsPageById(id): Observable<any> {
    const neededNewsPage = this.serviceCars.find(newsPage => newsPage.id === id);
    return of(neededNewsPage);
  } 
  constructor() { }
}
