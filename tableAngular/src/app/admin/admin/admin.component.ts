import { Router } from '@angular/router';
import { AuthService } from "../auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  prods = [];
  constructor(private _service: AuthService, private router:Router) {}

  ngOnInit() {
    this._service.getProducts().subscribe(res => {
      this.prods = res;
    });
  }

  logout() {              
    this._service.clear();              
    this.router.navigateByUrl("/");              
}   
}
