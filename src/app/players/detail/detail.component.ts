import { Subscription } from 'rxjs/Subscription';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';

import { PlayerService } from '../../player.service';
import { Player } from '../../player';

@Component({
  selector: 'app-players-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class PlayersDetailComponent implements OnDestroy {
  errors: string[] = [];
  sub: Subscription;

  @Output()
  playerEmitter = new EventEmitter<Player>();

  @Input()
  player: Player;

  constructor(private playerService: PlayerService) { }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  updatePlayer(player: Player): void {
    this.sub = this.playerService
                .updatePlayer(player)
                .subscribe(
                  updatedPlayer => this.playerEmitter.emit(updatedPlayer),
                  response => this.handleErrors(response.json())
                );

  }

  private handleErrors(errors: Error | string[]): void {
    this.errors = Array.isArray(errors) ? errors : [errors.message];
  }
}
