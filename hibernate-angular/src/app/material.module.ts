import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatExpansionModule, BrowserAnimationsModule],
  exports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatExpansionModule, BrowserAnimationsModule]
})
export class MaterialModule { }