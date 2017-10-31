import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppbodyComponent } from './appbody/appbody.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterLinksComponent } from './footer-links/footer-links.component';

@NgModule({
  declarations: [
    AppComponent,
    AppbodyComponent,
    NavbarComponent,
    ContentComponent,
    FooterLinksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
