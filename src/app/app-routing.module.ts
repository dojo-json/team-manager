import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PlayersComponent } from './players/players.component';
import { PlayersAddComponent } from './players/add/add.component';
import { PlayersListComponent } from './players/list/list.component';

import { GameStatusComponent } from './status/game/game.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'players',
    pathMatch: 'full',
  },
  {
    path: 'players',
    component: PlayersComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: PlayersListComponent,
      },
      {
        path: 'addplayer',
        component: PlayersAddComponent,
      },
    ],
  },
  // handy trick that allows the parent and children to share url parameters
  {
    path: 'status/game/:id',
    component: StatusComponent,
    children: [
      {
        path: '',
        component: GameStatusComponent,
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
