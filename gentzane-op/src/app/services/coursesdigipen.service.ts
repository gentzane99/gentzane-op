import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '../interfaces/icoursedigipen.interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesdigipenService {
  private httpClient = inject(HttpClient);

  async getCoursesDigipen(): Promise<ICategory[]>{
    return await firstValueFrom(this.httpClient.get<ICategory[]>('/assets/data/digipenCourses.json'))
  }  
}
