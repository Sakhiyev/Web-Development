import { Injectable } from '@angular/core';
import { categories }  from   './cars1';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CatserService {

  constructor() { }
  getCategory(id: number): Observable <any>{
  return of(categories.find(category => category.id=== id));
}
  getEnabledCategories(): Observable <any>{
    return of (categories)
  }
}
