import { Order } from "../model/order";
import { Product } from "../model/product";

import {
  Http,
  Request,
  RequestMethod,
  RequestOptions,
  Headers
} from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
  baseUrl: string;
  auth_token: string;

  constructor(private _http: Http) {
    this.baseUrl = "http://localhost:5555/";
  }

  private sendRequest(
    verb: RequestMethod,
    url: string,
    body?: Product | Order,
    auth: boolean = false
  ): Observable<any | any[]> {
    let request = new Request({
      method: verb,
      url: this.baseUrl + url,
      body: body
    });
    if (auth && this.auth_token != null) {
      request.headers.set("Authorization", `Bearer<${this.auth_token}>`);
    }
    return this._http.request(request).map(response => response.json());
  }

  authenticated(): boolean {
    return this.auth_token != null;
}

  authenticate(username, password) {
    let header = new Headers({ "Content-Type": "application/json" });
    let option = new RequestOptions({ headers: header });
    return this._http
      .post(
        "http://localhost:5555/login",
        JSON.stringify({ username: username, password: password }),
        option
      )
      .map(res => {
        let r = res.json();
        this.auth_token = r.success ? r.token : null;
        return r.success;
      });
  }

  getProducts(): Observable<Product[]> {
    return this.sendRequest(RequestMethod.Get, "product");
  }

  saveProduct(product: Product): Observable<Product> {
    return this.sendRequest(RequestMethod.Post, "product", product, true);
  }

  updateProduct(product): Observable<Product> {
    return this.sendRequest(
      RequestMethod.Put,
      `product/${product.id}`,
      product,
      true
    );
  }

  deleteProduct(id: number): Observable<Product> {
    return this.sendRequest(RequestMethod.Delete, `product/${id}`, null, true);
  }

  getOrders(): Observable<Order[]> {
    return this.sendRequest(RequestMethod.Get, "orders", null, true);
  }

  deleteOrder(id: number): Observable<Order> {
    return this.sendRequest(RequestMethod.Delete, `orders/${id}`, null, true);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.sendRequest( RequestMethod.Put, `orders/${order.id}`, order, true );
  }

  saveOrder(order: Order): Observable<Order> {
    return this.sendRequest(RequestMethod.Post, "orders", order);
  }


  clear() {
    this.auth_token = null;
}

}
