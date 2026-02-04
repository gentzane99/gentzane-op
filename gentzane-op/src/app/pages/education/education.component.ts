import { Component, inject } from '@angular/core';
import { ICategory } from '../../interfaces/icoursedigipen.interface';
import { CoursesdigipenService } from '../../services/coursesdigipen.service';
import { DigipenCategoryComponent } from './digipen-category/digipen-category.component';
@Component({
    selector: 'app-education',
    imports: [DigipenCategoryComponent],
    templateUrl: './education.component.html',
    styleUrl: './education.component.css',
})
export class EducationComponent {

    private digipenCourseService = inject(CoursesdigipenService);
    digipenCourses: ICategory[] = [];
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
