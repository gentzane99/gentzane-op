import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { IProject } from '../../interfaces/iproject.interface';
import { ProjectsCardComponent } from "./projects-card/projects-card.component";

@Component({
  selector: 'app-projects',
  imports: [ProjectsCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
    private projectService = inject(ProjectsService);
    projects: IProject[] = [];
    unirProjects: IProject[] = [];
    digiPenProjects: IProject[] = [];

    loading = true; 
    error: string | null = null;

    async ngOnInit(){
        try {
            this.projects = await this.projectService.getProjects();
            this.unirProjects = this.projects.filter(p => p.category === 'UNIR');
            this.digiPenProjects = this.projects.filter(p => p.category === 'DigiPen');
        } catch (error) {
            this.error = 'Error al cargar los proyectos';
            console.error(this.error, error)
        }
        this.loading = false;
    }
}
