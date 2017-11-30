import { Observable } from "rxjs/Rx";
import { Order } from "./model/order";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
@Injectable()
export class OrderService {
  constructor(private _http: Http) {}

  getOrders(): Observable<Order[]> {
    return this._http
      .get("http://localhost:5555/order")
      .map(res => <Order[]>res.json());
  }

  saveOrder(order) {
    let header = new Headers({ "Content-Type": "application/json" });
    let option = new RequestOptions({ headers: header });
    return this._http
      .post("http://localhost:5555/order", JSON.stringify({...order}), option)
      .map(res => res.json());
  }
}
