import { StoreComponent } from "./store/store.component";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class StoreFirstGuard implements CanActivate {
  private firstNavigaate = true;
  constructor(private route: Router) {
    console.log(this.firstNavigaate);
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.firstNavigaate) {
      this.firstNavigaate = false;
      if (next.component != StoreComponent) {
        this.route.navigateByUrl("/");
        return false;
      }
    }
    return true;
  }
}
