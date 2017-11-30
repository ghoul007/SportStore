import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { AuthComponent } from "./auth/auth.component";
import { AdminComponent } from "./admin/admin.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

let routing = RouterModule.forChild([
  { path: "auth", component: AuthComponent },
  { path: "main", component: AdminComponent },
  { path: "**", redirectTo: "auth" }
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  declarations: [AdminComponent, AuthComponent]
})
export class AdminModule {}
