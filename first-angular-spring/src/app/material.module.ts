import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card'; 
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatTableModule, MatCardModule],
  exports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatTableModule, MatCardModule]
})
export class MaterialModule { }