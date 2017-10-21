import { Game } from './game';

export class Player {
  _id: string;
  name: string;
  preferredPosition: string;
  games: Game[];
}
