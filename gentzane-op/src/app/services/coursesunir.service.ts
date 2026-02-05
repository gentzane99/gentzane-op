import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICourseUnir } from '../interfaces/icourseunir.interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesunirServices {
  private httpClient = inject(HttpClient);

  async getCoursesUnir(): Promise<ICourseUnir[]>{
    return await firstValueFrom(this.httpClient.get<ICourseUnir[]>('/assets/data/unirCourses.json'))
  }  
}

