import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { CodingLanguagesComponent } from './content/coding-languages/coding-languages.component';
import { ContentListComponent } from './content-list/content-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CodingLanguagesComponent,
    ContentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
