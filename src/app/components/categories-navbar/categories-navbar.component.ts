import { Component, OnInit } from '@angular/core';
import { CategoriesManagmentService } from 'src/app/services/categories-managment.service';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-categories-navbar',
  templateUrl: './categories-navbar.component.html',
  styleUrls: ['./categories-navbar.component.css'],
})
export class CategoriesNavbarComponent implements OnInit {
  constructor(public categoriesManagmentService: CategoriesManagmentService) {}

  categoriesData: Category[] = [];

  clickHandler(id: number) {
    this.categoriesManagmentService.activeCategoryId.next(id);
  }

  ngOnInit(): void {
    this.categoriesManagmentService
      .getProductCategories()
      .subscribe((response) => {
        this.categoriesData = response;
        this.categoriesManagmentService.activeCategoryId.next(response[0].id);
      });
  }
}
