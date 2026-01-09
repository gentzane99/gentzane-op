import { inject, Injectable } from '@angular/core';
import { IGame } from '../interfaces/igame.interface';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GamesService {
    private httpClient = inject(HttpClient);

  async getGames(): Promise<IGame[]>{
    return await firstValueFrom(this.httpClient.get<IGame[]>('assets/data/games.json'))
  }
}
