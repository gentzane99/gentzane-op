import { Component, input } from '@angular/core';
import { IGame } from '../../../interfaces/igame.interface';

@Component({
  selector: 'app-game-card',
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent {
    game = input.required<IGame>();
}
