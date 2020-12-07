import { TitleComponent } from './title.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [TitleComponent],
  imports: [
    CommonModule,
    MatDividerModule,
  ],
  exports: [TitleComponent]
})
export class TitleModule { }
