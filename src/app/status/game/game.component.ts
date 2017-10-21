import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { PlayerService } from '../../player.service';
import { Player } from '../../player';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameStatusComponent implements OnInit, OnDestroy {
  sub: Subscription;
  // use the observable directly with an async pipe (see ngFor in html)
  players$: Observable<Player[]>;
  gameIndex: number;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        params => {
          this.gameIndex = parseInt(params.get('id'), 10) - 1;
        },
        console.log
      );

    this.players$ = this.playerService.getPlayers();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  playerStatus(player: Player): string {
    return player.games[this.gameIndex].playerStatus;
  }

  selectStatus(player: Player, status: string): void {
    if (player.games[this.gameIndex].playerStatus === status) {
      return;
    }

    player.games[this.gameIndex].playerStatus = status;

    this.sub = this.playerService.updatePlayer(player)
                  .subscribe(
                    updatedPlayer => console.log(updatedPlayer),
                    console.log
                  );

  }
}
