import { Cart } from '../model/cart';
import { Product } from '../model/product';
import { ProductService } from "../product.service";
import { Component, OnInit } from "@angular/core";
import 'rxjs/add/operator/map';
@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.css"]
})
export class StoreComponent implements OnInit {
  products: any = [];
  allProducts: any = [];
  categories: any = [];
  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private _productService: ProductService, private _cart :Cart) {}

  public ngOnInit(): void {
    this.listproducts();
  }

  public listproducts() {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    let cat = this.selectedCategory;
    this.allProductsT();
    return this._productService.getProducts(cat).subscribe(res => {
      this.allProducts = res;
      this.products = res.slice(pageIndex, pageIndex + this.productsPerPage);
    });
  }



  public allProductsT() {
    return this._productService.getProducts().subscribe(res => {
      this.categories = res
        .map(res => res.category)
        .filter((val, index, array) => array.indexOf(val) == index)
        .sort();
    });
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
    this.listproducts();
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.allProducts.length / this.productsPerPage))
      .fill(0)
      .map((x, i) => i + 1);
  }

  public changePageSize(newPage: number) {
    this.productsPerPage = newPage;
    this.listproducts();
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
    this.listproducts();
  }


  addProductToCart(product: Product) {              
    this._cart.addToCart(product);              
}  
}
