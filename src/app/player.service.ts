import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Player } from './player';

import 'rxjs/add/operator/map';

@Injectable()
export class PlayerService {
  base = '/api/players/';

  constructor(private http: Http) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get(this.base)
      .map(response => response.json());
  }

  showPlayer(id: string): Observable<Player> {
    return this.http.get(this.base + id)
      .map(response => response.json());
  }

  createPlayer(player: Player): Observable<Player> {
    return this.http.post(this.base, player)
      .map(response => response.json());
  }

  updatePlayer(player: Player): Observable<Player> {
    return this.http.put(this.base + player._id, player)
      .map(response => response.json());
  }

  destroyPlayer(id: string): Observable<Player> {
    return this.http.delete(this.base + id)
      .map(response => response.json());
  }
}
