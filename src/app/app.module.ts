import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PlayersListComponent } from './players/list/list.component';
import { PlayersComponent } from './players/players.component';
import { PlayersAddComponent } from './players/add/add.component';
import { PlayersNavComponent } from './players/nav/nav.component';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Services
import { PlayerService } from './player.service';
import { StatusComponent } from './status/status.component';
import { GameStatusComponent } from './status/game/game.component';
import { PlayersDetailComponent } from './players/detail/detail.component';

@NgModule({
  declarations: [
    PlayersDetailComponent,
    PlayersListComponent,
    PlayersNavComponent,
    PlayersAddComponent,
    GameStatusComponent,
    PlayersComponent,
    StatusComponent,
    AppComponent,
    NavComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    PlayerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
