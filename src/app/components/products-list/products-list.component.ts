import { Component, OnInit } from '@angular/core';
import { CategoriesManagmentService } from 'src/app/services/categories-managment.service';
import { ProductsServiseService } from 'src/app/services/products-servise.service';
import { Product } from 'src/app/interfaces/product';
import { CartManagementService } from 'src/app/services/cart-management.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  constructor(
    public categoriesManagmentService: CategoriesManagmentService,
    private productsServise: ProductsServiseService,
    private cartManagementService: CartManagementService
  ) {}

  productsList: Product[] = [];

  ngOnInit(): void {
    this.categoriesManagmentService.activeCategoryId.subscribe((id) => {
      if (id) {
        this.productsServise.getProducts(id as number).subscribe((response) => {
          this.productsList = response.products;
        });
      }
    });
  }

  addToCart(id: number, price: number) {
    const data = {
      price: price,
      productId: id,
      quantity: 1,
    };

    this.cartManagementService
      .addProductToBasket(data)
      .subscribe((response) => {
        alert('Product added to cart');
      });
  }

  filterformHandler(formValue: NgForm) {
    if (this.categoriesManagmentService.activeCategoryId.value) {
      this.productsServise
        .getFilteredProducts({
          nuts: formValue.value.nuts,
          spiciness: formValue.value.spiciness,
          vegetarian: formValue.value.vegetarian,
          categoryId: this.categoriesManagmentService.activeCategoryId.value,
        })
        .subscribe((response) => {
          this.productsList = response;
        });
    }
  }
}
