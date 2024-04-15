import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { ReferanslarComponent } from './referanslar/referanslar.component';
import { IletisimComponent } from './iletisim/iletisim.component';

export const routes: Routes = [
  {
    path: 'hakkimizda',
    loadChildren: () => import('../app/hakkimizda/hakkimizda.routes'),
  },
  {
    path: 'iletisim',
    loadComponent: () =>
      import('../app/iletisim/iletisim.component').then(
        (c) => c.IletisimComponent
      ),
  },
  {
    path: 'referanslar',
    loadComponent: () =>
      import('../app/referanslar/referanslar.component').then(
        (c) => c.ReferanslarComponent
      ),
  },
];
