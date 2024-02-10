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
    path: 'Favorites',
    component: FavoriteComponent,
  },
  {
    path: '**',
    redirectTo: '/Main'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
