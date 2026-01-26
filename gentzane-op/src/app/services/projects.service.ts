import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProject } from '../interfaces/iproject.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
    private httpClient = inject(HttpClient);

    async getProjects(): Promise<IProject[]>{
        return await firstValueFrom(this.httpClient.get<IProject[]>('/assets/data/projects.json'))
    }  
}
