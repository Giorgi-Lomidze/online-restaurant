import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsServiseService {
  constructor(private http: HttpClient) {}

  getProducts(id: number) {
    return this.http.get<{ id: number; name: string; products: Product[] }>(
      `https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`
    );
  }

  getFilteredProducts(data: {
    nuts: boolean;
    spiciness: number;
    vegetarian: boolean;
    categoryId: number;
  }) {
    return this.http.get<Product[]>(
      `https://restaurant.stepprojects.ge/api/Products/GetFiltered?nuts=${data.nuts}&vegetarian=${data.vegetarian}&spiciness=${data.spiciness}&categoryId=${data.categoryId}`
    );
  }

  // deleteProduct(id: number) {
  //   return this.http.delete(
  //     `https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`
  //   );
  // }
}
