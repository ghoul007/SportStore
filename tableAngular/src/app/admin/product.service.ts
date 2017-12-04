import { Product } from "../model/product";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
  products = [];
  categories = [];
  constructor(private _service: AuthService) {
    this._service.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data
        .map(p => p.category)
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }

  getProducts(category: string = null): Product[] {
    return this.products.filter(
      p => category == null || category == p.category
    );
  }

  getProduct(id: number): Product {
    return this.products.find(p => p.id == id);
  }

  getCategories(): string[] {
    return this.categories;
  }

  saveProduct(product: Product) {
    if (product.id == null || product.id == 0) {
      this._service.saveProduct(product).subscribe(p => this.products.push(p));
    } else {
      this._service.updateProduct(product).subscribe(p => {
        this.products.splice(
          this.products.findIndex(p => p.id == product.id),
          1,
          product
        );
      });
    }
  }

  deleteProduct(id: number) {
    this._service.deleteProduct(id).subscribe(p => {
      this.products.splice(this.products.findIndex(p => p.id == id), 1);
    });
  }
}
