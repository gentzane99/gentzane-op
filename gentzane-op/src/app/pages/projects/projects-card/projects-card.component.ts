import { Component, input } from '@angular/core';
import { IProject } from '../../../interfaces/iproject.interface';

@Component({
  selector: 'app-projects-card',
  imports: [],
  templateUrl: './projects-card.component.html',
  styleUrl: './projects-card.component.css',
})
export class ProjectsCardComponent {
  project = input.required<IProject>();
}
