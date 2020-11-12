import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [ CommonModule, FormsModule, SharedComponent]
})
export class SharedModule { }
