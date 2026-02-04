import { Component, input, signal } from '@angular/core';
import { ICourse, ICategory } from '../../../interfaces/icoursedigipen.interface';

@Component({
  selector: 'app-digipen-course-card',
  imports: [],
  templateUrl: './digipen-course-card.component.html',
  styleUrl: './digipen-course-card.component.css',
})
export class DigipenCourseCardComponent {
    course = input.required<ICourse>();
    isOpen = signal(false);

    toggleDescription() {
        this.isOpen.update((value) => !value);
    }
}
