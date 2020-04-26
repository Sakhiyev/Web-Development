import { Injectable } from '@angular/core';
import {Bear} from './bear';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BearService {
  BASE_URL = 'http://127.0.0.1:8000';
  list: Bear[];
  constructor(private http: HttpClient) {
    this.chooseList(1);
  }
  getTopThree(): Observable<Recipe[]> {
    return this.http.get<Bear[]>(`${this.BASE_URL}/api/recipes/top_three/`);
  }
  getBears(id: number): Observable<Bear[]> {
    return this.http.get<Bear[]>(`${this.BASE_URL}/api/bears/`);
  }
  getBear(id: string): Observable<Bear> {
    return this.http.get<Bear>(`${this.BASE_URL}/api/bears/${id}/`);
  }
  chooseList(id: number): void {
    return this.http.get<Bear[]>(`${this.BASE_URL}/api/categories/${id}/bears/`);
  }

}
