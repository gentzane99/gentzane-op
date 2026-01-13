import { Component, inject } from '@angular/core';
import { IGame } from '../../interfaces/igame.interface';
import { GamesService } from '../../services/games.service';
import { GameCardComponent } from './game-card/game-card.component';
@Component({
  selector: 'app-games',
  imports: [GameCardComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
})
export class GamesComponent {

    private gamesService = inject(GamesService);
    games: IGame[] = [];
    loading = true; 
    error: string | null = null;

    async ngOnInit(){
        try {
            this.games = await this.gamesService.getGames();
        } catch (error) {
            this.error = 'Error al cargar los juegos';
            console.error(this.error, error)
        }
        this.loading = false;
    }
}
