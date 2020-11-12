import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* import { ProductsModule } from './products/products.module'; */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  /*   ProductsModule, */
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
