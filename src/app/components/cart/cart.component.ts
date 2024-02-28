import { Component, OnInit } from '@angular/core';
import { CartManagementService } from 'src/app/services/cart-management.service';
import { ProductsServiseService } from 'src/app/services/products-servise.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartManagementService) {}

  cartProductData: any = [];

  ngOnInit(): void {
    this.cartService.getAllBasketItems().subscribe((response) => {
      this.cartProductData = response;
    });
  }

  deleteHandler(id: number) {
    this.cartService.deleteProductFromBasket(id).subscribe(() => {
      alert('item is deleted');
      this.cartProductData = this.cartProductData.filter(
        (product: any) => product.product.id !== id
      );
    });
  }
}
