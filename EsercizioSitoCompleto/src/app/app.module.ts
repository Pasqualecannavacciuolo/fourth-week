import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CcHoverDirective } from './cc-hover.directive';
import { UnlessDirective } from './unless.directive';
import { MultiplierPipe } from './multiplier.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HeroImageComponent,
    ContentComponent,
    FooterComponent,
    CcHoverDirective,
    UnlessDirective,
    MultiplierPipe
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
