import { Component, input, signal } from '@angular/core';
import { ICategory } from '../../../interfaces/icoursedigipen.interface';
import { DigipenCourseCardComponent } from '../digipen-course-card/digipen-course-card.component';
@Component({
  selector: 'app-digipen-category',
  imports: [DigipenCourseCardComponent],
  templateUrl: './digipen-category.component.html',
  styleUrl: './digipen-category.component.css',
})
export class DigipenCategoryComponent {
    category = input.required<ICategory>();
    isOpen = signal(false);

    toggleCourses() {
        this.isOpen.update((value) => !value);
    }
}
