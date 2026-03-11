import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GamesComponent } from './pages/games/games.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EducationComponent } from './pages/education/education.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/error/not-found/not-found.component';
import { SkillsComponent } from './pages/skills/skills.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Inicio | Gentzane' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'games', component: GamesComponent, title: 'Juegos | Gentzane' },
  { path: 'projects', component: ProjectsComponent, title: 'Proyectos | Gentzane' },
  { path: 'education', component: EducationComponent, title: 'Educacion | Gentzane' },
  { path: 'skills', component: SkillsComponent, title: 'Habilidades | Gentzane' },
  { path: 'contact', component: ContactComponent, title: 'Contacto | Gentzane' },
  {
    path: 'demo',
    loadChildren: () => import('./pages/demo/demo.routes').then(m => m.DEMO_ROUTES),
    title: 'Demos | Gentzane',
  },
  { path: '**', component: NotFoundComponent, title: 'Pagina no encontrada | Gentzane' }
];
