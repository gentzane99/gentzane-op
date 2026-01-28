import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { IProject, DigipenCategory, UNIRCategory } from '../../interfaces/iproject.interface';
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

    unirOrder: UNIRCategory[] = ['Frontend', 'Backend', 'Database', 'Fullstack'];
    digipenOrder: DigipenCategory[] = ['CS120', 'CS250', 'CS300', 'CS380'];
    digipenCourseNames: Record<DigipenCategory, string> = {
      CS120: 'High-Level Programming',
      CS250: 'Computer Graphics',
      CS300: 'Advanced Computer Graphics',
      CS380: 'AI',
    };

    unirByCourse: Record<UNIRCategory, IProject[]> = {
      Frontend: [],
      Backend: [],
      Database: [],
      Fullstack: [],
    };

    digipenByCourse: Record<DigipenCategory, IProject[]> = {
      CS120: [],
      CS250: [],
      CS300: [],
      CS380: [],
    };

    loading = true; 
    error: string | null = null;

    async ngOnInit(){
        try {
            this.projects = await this.projectService.getProjects();
            this.unirProjects = this.projects.filter(p => p.category === 'UNIR');
            this.digiPenProjects = this.projects.filter(p => p.category === 'DigiPen');

             // Agrupar UNIR
            for (const c of this.unirOrder) {
              this.unirByCourse[c] = this.unirProjects.filter(p => p.course === c);
            }
        
            // Agrupar DigiPen
            for (const c of this.digipenOrder) {
              this.digipenByCourse[c] = this.digiPenProjects.filter(p => p.course === c);
            }

        } catch (error) {
            this.error = 'Error al cargar los proyectos';
            console.error(this.error, error)
        }
        this.loading = false;
    }
}
