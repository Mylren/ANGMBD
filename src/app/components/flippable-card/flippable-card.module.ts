import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlippableCardComponent } from './flippable-card.component';
import {FlippableCardBackComponent} from './flippable-card-back';
import {FlippableCardFrontComponent} from './flippable-card-front';
import { NgxTypedJsModule } from "ngx-typed-js";


@NgModule({
  declarations: [FlippableCardComponent, FlippableCardBackComponent, FlippableCardFrontComponent],
  imports: [
    CommonModule,
    NgxTypedJsModule
  ],
  exports: [FlippableCardComponent, FlippableCardBackComponent, FlippableCardFrontComponent]
})
export class FlippableCardModule { }
