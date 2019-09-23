import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/budget/dashboard/dashboard.component';
import { PloaComponent } from '../../pages/budget/ploa/ploa.component';

import {GenericPage} from '../../pages/analytic/generic-table-page/generic-table-page.component';

import { NotificationComponent } from '../../pages/popular-pharmacy/notification/notification/notification.component';
import { RemedyLifecycleComponent } from '../../pages/budget/remedy-lifecycle/remedy-lifecycle.component';
import { ElucidationComponent } from '../../pages/popular-pharmacy/notification/elucidation/elucidation.component';
import {FormElucidationComponent} from '../../pages/popular-pharmacy/notification/form-elucidation/form-elucidation.component';
import {OccurrenceTypesComponent} from '../../pages/popular-pharmacy/notification/occurrence-types/occurrence-types.component';
import { MulctComponent } from '../../pages/popular-pharmacy/mulct/mulct.component';
import { from } from 'rxjs';

export const AppLayoutRoutes: Routes = [
  // Overview paths
  { path: '', component: RemedyLifecycleComponent },
  { path: 'caf', component: RemedyLifecycleComponent },

  // Budget paths (Orçamento)
  { path: 'budget/dashboard', component: DashboardComponent },
  { path: 'budget/ploa', component: PloaComponent },


  //Analytic paths (Visão Analítica)
  { path: 'analytic/:id', component: GenericPage },




  // Predictive paths


  // Popular Pharmacy
  { path: 'popular-pharmacy/notification', component: NotificationComponent },
  { path: 'popular-pharmacy/notification/elucidation', component: ElucidationComponent },
  { path: 'popular-pharmacy/notification/elucidation/form', component: FormElucidationComponent },
  { path: 'popular-pharmacy/notification/occurrences-types', component: OccurrenceTypesComponent },
  { path: 'popular-pharmacy/mulct', component: MulctComponent }

];
