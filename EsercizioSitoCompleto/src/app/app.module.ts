import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HeroImageComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
