import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GiftComponent} from "./gift/gift.component";

const routes: Routes = [
  {path: '**', component: GiftComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
