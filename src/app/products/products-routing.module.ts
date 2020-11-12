import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedComponent } from '../shared/shared.component';
import { ProductComponent } from './product.component';



@NgModule({
    declarations: [],
    imports: [RouterModule.forChild([
        { path: 'shared', component: SharedComponent },
        { path: '', component: ProductComponent }
    ])],
    exports: [RouterModule]
})

export class ProductsRouting { }
