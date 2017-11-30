import { AuthGuard } from "./auth.guard";
import { HttpModule } from "@angular/http";
import { AuthService } from "./auth.service";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AuthComponent } from "./auth/auth.component";
import { AdminComponent } from "./admin/admin.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

let routing = RouterModule.forChild([
  { path: "auth", component: AuthComponent },
  { path: "main", component: AdminComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "auth" }
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing, HttpModule],
  declarations: [AdminComponent, AuthComponent],
  providers: [AuthService, AuthGuard]
})
export class AdminModule {}
