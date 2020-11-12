import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
/* import { RouterModule } from '@angular/router'; */
import { SharedModule } from '../shared/shared.module';
import { ProductsRouting } from './products-routing.module';



@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule, SharedModule, ProductsRouting
    /* ,
    RouterModule.forChild([
      { path: 'products', component: ProductComponent },
      { path: 'products1', component: ProductComponent }
    ]) */
  ]
})
export class ProductsModule { }
