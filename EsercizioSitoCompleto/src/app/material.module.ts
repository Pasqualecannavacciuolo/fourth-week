import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatGridListModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule],
  exports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatGridListModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule]
})
export class MaterialModule { }