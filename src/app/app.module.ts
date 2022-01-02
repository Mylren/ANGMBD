import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import { GiftComponent } from './gift/gift.component';
import {FlippableCardModule} from "./components/flippable-card/flippable-card.module";
import { NgxTypedJsModule } from "ngx-typed-js";

@NgModule({
  declarations: [
    AppComponent,
    GiftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlippableCardModule,
    NgxTypedJsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
