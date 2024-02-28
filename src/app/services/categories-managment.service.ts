import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesManagmentService {
  constructor(private http: HttpClient) {}

  activeCategoryId = new BehaviorSubject<number | null>(null);

  getProductCategories() {
    return this.http.get<Category[]>(
      'https://restaurant.stepprojects.ge/api/Categories/GetAll'
    );
  }
}
