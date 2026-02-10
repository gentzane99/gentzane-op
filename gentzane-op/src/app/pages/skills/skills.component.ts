import { Component, inject } from '@angular/core';
import { ILanguages, ISkills } from '../../interfaces/iskills.interfaces';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
    private skillsService = inject(SkillsService);

    skills: ISkills | null = null;
    techSkills: string[] = [];
    softSkills: string[] = [];
    languages: ILanguages[] = [];

    loading = true; 
    error: string | null = null;
    
    async ngOnInit(){

        try{
            this.skills = await this.skillsService.getSkills();
            this.techSkills = this.skills.technical;
            this.softSkills = this.skills.soft;
            this.languages = this.skills.languages;

        } catch (error) {
            this.error = 'Error al cargar los proyectos';
            console.error(this.error, error)
        }
        this.loading = false;
    }
}
