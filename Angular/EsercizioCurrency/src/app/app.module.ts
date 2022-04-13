import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoneyComponent } from './money/money.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { MaterialModule } from './material.module';
import { UnlessDirective } from './unless.directive';
import { ConversionPipe } from './conversion.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MoneyComponent,
    CurrencyListComponent,
    UnlessDirective,
    ConversionPipe
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
