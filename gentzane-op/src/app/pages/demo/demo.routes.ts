import { Routes } from '@angular/router';

export const DEMO_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./demo-hub/demo-hub.component').then(m => m.DemoHubComponent),
    title: 'Demos | Gentzane',
  },
  {
    path: 'tap-dodge',
    loadComponent: () =>
      import('./tap-dodge/tap-dodge.component').then(m => m.TapDodgeComponent),
    title: 'Tap Dodge | Gentzane',
  },

  { path: '**', redirectTo: '' }
];
