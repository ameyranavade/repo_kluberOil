import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighbwComponent } from './highbw/highbw.component';


const routes: Routes = [
  {
    path: '',
    component: HighbwComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
