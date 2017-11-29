import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
