import { ProductService } from '../../product.service';
import { NgForm } from '@angular/forms/src/directives';
import { Product } from "../../../model/product";
import { AuthService } from "../../auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.css"]
})
export class ProductEditComponent implements OnInit {
  editing: boolean = false;
  product: Product = new Product();

  constructor(
    private service: ProductService,
    private router: Router,
    activeRoute: ActivatedRoute
  ) {
    this.editing = activeRoute.snapshot.params["mode"] == "edit";
    if (this.editing) {
      Object.assign(
        this.product,
        service.getProduct(activeRoute.snapshot.params["id"])
      );
    }
  }


  save(form: NgForm) {                
    this.service.saveProduct(this.product);                
    this.router.navigateByUrl("/admin/main/products");                
}      

  ngOnInit() {}
}
