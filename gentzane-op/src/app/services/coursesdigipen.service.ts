import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICoursesDigipen } from '../interfaces/icoursedigipen.interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesdigipenService {
  private httpClient = inject(HttpClient);

  async getCoursesDigipen(): Promise<ICoursesDigipen[]>{
    return await firstValueFrom(this.httpClient.get<ICoursesDigipen[]>('/assets/data/digipenCourses.json'))
  }  
}
