
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms';


// Modulos
import { SharedModule } from '../shared/shared.module';


// Rutas
import { PAGES_ROUTING } from './pages.routes';

// temporal
import { IncrementadorComponent } from './../components/incrementador/incrementador.component';


// charts
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { GraficoDonaComponent } from './../components/grafico-dona/grafico-dona.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
  ],
  imports: [SharedModule, PAGES_ROUTING, FormsModule, ChartsModule],
})
export class PagesModule {}
