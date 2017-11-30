import { AuthService } from "../auth.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router, private auth: AuthService) {}

  authenticate(form: NgForm) {
    if (form.valid) {
      // perform authentication
      this.auth.authenticate(this.username, this.password).subscribe(res => {
        console.log('==>', res);
        if (res) {
          this.router.navigateByUrl("/admin/main");
        } else{
          this.errorMessage = "Form Data Invalid";
       }
      });
    } else {
      this.errorMessage = "Form Data Invalid";
    }
  }

  ngOnInit() {}
}
