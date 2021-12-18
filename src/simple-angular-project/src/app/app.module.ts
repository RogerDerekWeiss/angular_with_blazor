import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { BlazorInfoComponent } from "./blazor-info/blazor-info.component";

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    BlazorInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
