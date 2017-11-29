import { Cart } from "../model/cart";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart-summary",
  templateUrl: "./cart-summary.component.html",
  styleUrls: ["./cart-summary.component.css"]
})
export class CartSummaryComponent implements OnInit {
  constructor(public cart: Cart) {}

  ngOnInit() {}


}
