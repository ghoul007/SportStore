import { NgForm } from "@angular/forms";
import { OrderService } from "../order.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"]
})
export class CheckoutComponent implements OnInit {
  listOrders = [];
  order = {
    name: "",
    address: "",
    city: "",
    state: "",
    country: ""
  };
  submitted: boolean = false;
  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe(res => {
      this.listOrders = res;
    });
  }

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.order["shipped"] = false;
      this.orderService.saveOrder(this.order).subscribe(res => {
        console.log(res);
      });
    }
  }
}
