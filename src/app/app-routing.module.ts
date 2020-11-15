import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InruptComponent} from './inrupt/inrupt.component';

const routes: Routes = [
  { path: 'inrupt', component: InruptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
