import { Component, inject } from '@angular/core';
import { ICoursesDigipen } from '../../interfaces/icoursedigipen.interface';
import { CoursesdigipenService } from '../../services/coursesdigipen.service';
@Component({
    selector: 'app-education',
    imports: [],
    templateUrl: './education.component.html',
    styleUrl: './education.component.css',
})
export class EducationComponent {

    private digipenCourseService = inject(CoursesdigipenService);
    digipenCourses: ICoursesDigipen[] = [];
    loading = true; 
    error: string | null = null;

    async ngOnInit(){
        try {
            this.digipenCourses = await this.digipenCourseService.getCoursesDigipen();
        } catch (error) {
            this.error = 'Error al cargar los juegos';
            console.error(this.error, error)
        }
        this.loading = false;
    }
}
