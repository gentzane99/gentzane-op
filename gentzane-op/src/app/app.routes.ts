import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GamesComponent } from './pages/games/games.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EducationComponent } from './pages/education/education.component';
import { DemoComponent } from './pages/demo/demo.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/error/not-found/not-found.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'games', component: GamesComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'education', component: EducationComponent},
    {path: 'demo', component: DemoComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: NotFoundComponent}
];
