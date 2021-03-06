import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'account-settings', component: AccountSettingsComponent },
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    ]
  }
];

export const PAGES_ROUTING = RouterModule.forChild(pagesRoutes);
