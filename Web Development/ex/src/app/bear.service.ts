import { Injectable } from '@angular/core';
import {List} from './list';
import {Bear} from './bear';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BearService {
  list: Bear[];
  constructor() {
    this.chooseList(1);
  }
  getBears(id: number): Observable<Bear[]> {
    this.list = List.filter(
      bear => bear.category.id === id
    );
    return of (this.list);
  }
  chooseList(id: number): void {
    this.getBears(id).subscribe(list => this.list = list);
  }

}
