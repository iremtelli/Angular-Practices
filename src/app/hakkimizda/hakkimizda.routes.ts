import { Routes } from '@angular/router';
import { HakkimizdaComponent } from './hakkimizda.component';

const hakkimizdaRoutes: Routes = [
  {
    path: '',
    component: HakkimizdaComponent,
    children: [
      {
        path: 'misyonumuz',
        loadComponent: () => import('./misyonumuz/misyonumuz.component'),
      },
      {
        path: 'vizyonumuz',
        loadComponent: () => import('./vizyonumuz/vizyonumuz.component'),
      },
    ],
  },
];

export default hakkimizdaRoutes;
