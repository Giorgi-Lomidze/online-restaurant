import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartManagementService {
  constructor(private http: HttpClient) {}

  addProductToBasket(productData: {
    quantity: number;
    price: number;
    productId: number;
  }) {
    return this.http.post(
      'https://restaurant.stepprojects.ge/api/Baskets/AddToBasket',
      productData
    );
  }

  getAllBasketItems() {
    return this.http.get<any>(
      'https://restaurant.stepprojects.ge/api/Baskets/GetAll'
    );
  }

  deleteProductFromBasket(id: number) {
    return this.http.delete(
      `https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`
    );
  }
}
