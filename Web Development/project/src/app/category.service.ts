import { Injectable } from '@angular/core';
import { CATEGORIES} from './mock-categories';
import {Category} from './category';
import {Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private trigger = new Subject<void>();
  categories = CATEGORIES;
  constructor() {
  }
  get trigger$() {
    return this.trigger.asObservable();
  }
  public triggerOnMyButton() {
    this.trigger.next();
  }
  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }
}
