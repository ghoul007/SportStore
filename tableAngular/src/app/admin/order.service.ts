import { Order } from "../model/order";
import { AuthService } from "./auth.service";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class OrderService {
  orders = [];
  constructor(private _service: AuthService) {
    this._service.getOrders().subscribe(data => {
      this.orders = data;
    });
  }

  getOrders(): Order[] {
    return this.orders;
  }

  markShipped(order: Order) {
    order.shipped = true;
    this._service.updateOrder(order)
  }

  deleteOrder(id: number) {
    this._service.deleteOrder(id).subscribe(p => {
      this.orders.splice(this.orders.findIndex(p => p.id == id), 1);
    });
  }
  updateOrder(order) {
    this._service.updateOrder(order).subscribe(p =>p);
  }
}
