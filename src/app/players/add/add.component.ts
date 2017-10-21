import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { PlayerService } from '../../player.service';

import { Player } from '../../player';

@Component({
  selector: 'app-players-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class PlayersAddComponent implements OnDestroy {
  player: Player = new Player();
  errors: string[] = [];
  sub: Subscription;

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  addPlayer(player: Player): void {
    this.sub = this.playerService
                .createPlayer(player)
                .subscribe(
                  () => this.router.navigate(['players/list']),
                  response => this.handleErrors(response.json())
                );
  }

  /**
   * This is not all encompassing
   *
   * @private
   * @param {(Error | string[])} errors
   * @memberof PlayersAddComponent
   */
  private handleErrors(errors: Error | string[]): void {
    this.errors = Array.isArray(errors) ? errors : [errors.message];
  }
}
