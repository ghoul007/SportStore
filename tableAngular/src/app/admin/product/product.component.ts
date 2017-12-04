import { ProductService } from '../product.service';
import { Product } from '../../model/product';
import { AuthService } from "../auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  prods = [];
  constructor(private _service: ProductService) {}

  ngOnInit() {
    // this._service.getProducts(); 
  }

   getProducts(){
    return     this._service.getProducts(); 
  // return   this._service.getProducts().subscribe(res => {
  //     return  res;
  //   });
  }

  deleteProduct(id: number) {
    // this._service.deleteProduct(id);
  }
}
