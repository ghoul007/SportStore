import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class ProductService {
  constructor(private _http: Http) {}

  getProducts(category: string = null): Observable<any> {
    return this._http.get("http://localhost:5555/product").map(res =>
      res.json().filter(p => {
        return  ((category == null) || (category == p.category));
      })
    );
  }
}
