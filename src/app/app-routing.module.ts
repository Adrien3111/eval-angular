import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MovieComponent} from "./movie/movie.component";
import {CardComponent} from "./card/card.component";

const routes: Routes = [
  { path: '', component: MovieComponent},
  { path: 'details/:id', component: CardComponent},
  { path: ':id', component: MovieComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
