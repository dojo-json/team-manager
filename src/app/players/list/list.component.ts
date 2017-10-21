import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { PlayerService } from '../../player.service';

import { Player } from '../../player';

@Component({
  selector: 'app-players-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class PlayersListComponent implements OnInit, OnDestroy {
  sub: Subscription;
  playerSub: Subscription;
  selectedPlayer: Player;
  players: Array<Player> = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerSub = this.playerService
                      .getPlayers()
                      .subscribe(
                        players => this.players = players,
                        console.log
                      );
  }

  ngOnDestroy() {
    this.playerSub.unsubscribe();

    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  remove(player: Player) {
    if (confirm(`Are you sure you want to remove ${ player.name }`)) {
      // remove player
      this.sub = this.playerService
                    .destroyPlayer(player._id)
                    .subscribe(() => {
                      this.replacePlayer(player);
                    });
    }
  }

  selectPlayer(player: Player): void {
    this.selectedPlayer = this.selectedPlayer === player ? null : player;
  }

  updatePlayer(updatedPlayer: Player): void {
    // We do this because the updatedPlayer is not the same object
    const oldPlayer = this.players.find(player => player._id === updatedPlayer._id);

    this.replacePlayer(oldPlayer, updatedPlayer);
  }

  private replacePlayer(player: Player, replacement?: Player): void {
    if (this.selectedPlayer === player) {
      this.selectPlayer(replacement ? replacement : player);
    }

    const index = this.playerIndex(player);

    if (replacement) {
      this.players.splice(index, 1, replacement);
    } else {
      this.players.splice(index, 1);
    }
  }

  private playerIndex(player: Player): number {
    return this.players.indexOf(player);
  }
}
