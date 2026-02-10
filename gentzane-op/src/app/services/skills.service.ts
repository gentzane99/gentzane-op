import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ISkills } from '../interfaces/iskills.interfaces';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
    private httpClient = inject(HttpClient);
  
    async getSkills(): Promise<ISkills>{
        return await firstValueFrom(this.httpClient.get<ISkills>('/assets/data/skills.json'))
    } 
}
