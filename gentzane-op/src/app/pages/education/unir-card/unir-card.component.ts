import { Component, input, signal } from '@angular/core';
import { ICourseUnir } from '../../../interfaces/icourseunir.interface';
@Component({
  selector: 'app-unir-card',
  imports: [],
  templateUrl: './unir-card.component.html',
  styleUrl: './unir-card.component.css',
})
export class UnirCardComponent {
    modules = input.required<ICourseUnir>();
    isOpen = signal(false);

    toggleDescription() {
        this.isOpen.update((value) => !value);
    }
}
