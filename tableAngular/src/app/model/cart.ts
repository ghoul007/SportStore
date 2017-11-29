import { Injectable } from "@angular/core";
import { Product } from "./product";

@Injectable()
export class Cart {
  public cartPrice: number = 0;
  public itemCount: number = 0;
  public lines: CartLine[] = [];

  addToCart(product: Product, quantite: number = 1) {
    this.lines.push(new CartLine(product, quantite));
    this.recalculate();
  }

  updateQuantity(product: Product, quantity: number) {
    let line = this.lines.find(line => line.product.id == product.id);
    if (line != undefined) {
        line.quantity = Number(quantity);
    }
    this.recalculate();
}

removeLine(id: number) {
    let index = this.lines.findIndex(line => line.product.id == id);
    this.lines.splice(index);
    this.recalculate();
}


  recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.lines.forEach(l => {
      this.itemCount += l.quantite;
      this.cartPrice += l.quantite * l.product.price;
    });
  }

  clear() {
    this.lines = [];
    this.itemCount = 0;
  }
}

export class CartLine {
  public product: Product;
  public quantite: number;
  constructor(product: Product, quantite: number) {
    this.product = product;
    this.quantite = quantite;
  }
}
