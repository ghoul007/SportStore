import { Cart } from './model/cart';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { StoreComponent } from './store/store.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    CartSummaryComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ProductService, Cart],
  bootstrap: [AppComponent]
})
export class AppModule { }
