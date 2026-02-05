import { Component, inject } from '@angular/core';
import { ICategory } from '../../interfaces/icoursedigipen.interface';
import { CoursesdigipenService } from '../../services/coursesdigipen.service';
import { DigipenCategoryComponent } from './digipen-category/digipen-category.component';
import { ICourseUnir } from '../../interfaces/icourseunir.interface';
import { CoursesunirServices } from '../../services/coursesunir.service';
import { UnirCardComponent } from './unir-card/unir-card.component';
@Component({
    selector: 'app-education',
    imports: [DigipenCategoryComponent, UnirCardComponent],
    templateUrl: './education.component.html',
    styleUrl: './education.component.css',
})
export class EducationComponent {

    private digipenCourseService = inject(CoursesdigipenService);
    private unirCourseService = inject(CoursesunirServices);
    digipenCourses: ICategory[] = [];
    unirCourses: ICourseUnir[] = [];
    loading = true; 
    error: string | null = null;

    async ngOnInit(){
        try {
            this.digipenCourses = await this.digipenCourseService.getCoursesDigipen();
            this.unirCourses = await this.unirCourseService.getCoursesUnir();
        } catch (error) {
            this.error = 'Error al cargar los juegos';
            console.error(this.error, error)
        }
        this.loading = false;
    }
}
