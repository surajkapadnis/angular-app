import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { HttpModule } from '@angular/http';
//import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
    //,ProductAddComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }