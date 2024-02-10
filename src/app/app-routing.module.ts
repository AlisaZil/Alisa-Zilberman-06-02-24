import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { FavoriteComponent } from './favorite/favorite.component';

const routes: Routes = [
  {
    path: 'Main',
    component: MainComponent,
  },
  {
    path: 'Favorite',
    component: FavoriteComponent,
  },
  {
    path: '/',
    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
