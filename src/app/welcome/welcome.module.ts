import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { ProductsModule } from '../products/products.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule, ProductsModule
  ]
})
export class WelcomeModule { }
