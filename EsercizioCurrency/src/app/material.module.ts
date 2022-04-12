import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatButtonToggleModule],
  exports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatButtonToggleModule]
})
export class MaterialModule { }