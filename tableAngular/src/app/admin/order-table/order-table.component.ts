import { OrderService } from "../order.service";
import { Component, OnInit } from "@angular/core";
import { Order } from "../../model/order";

@Component({
  selector: "app-order-table",
  templateUrl: "./order-table.component.html",
  styleUrls: ["./order-table.component.css"]
})
export class OrderTableComponent implements OnInit {
  includeShipped = false;
 
  constructor(private orderService: OrderService) {

  }
  
  getOrders(){
   return this.orderService.getOrders();
  //   // .filter(o => this.includeShipped || !o.shipped);
  }

  markShipped(order: Order) {
    order.shipped = true;
    this.orderService.updateOrder(order);
  }

  delete(id: number) {
    this.orderService.deleteOrder(id);
  }

  public ngOnInit(): void {


  }
}
