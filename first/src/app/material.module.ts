import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, MatToolbarModule],
  exports: [CommonModule, MatToolbarModule]
})
export class AppModule { }