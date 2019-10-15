import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { AppLayoutRoutes } from './app-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from '../../pages/budget/dashboard/dashboard.component';
import { PloaComponent } from '../../pages/budget/ploa/ploa.component';
import { AnalyticPage } from '../../pages/analytic/analytic-page.component';
import { ElucidationComponent } from '../../pages/popular-pharmacy/notification/elucidation/elucidation.component';
import { NotificationComponent } from '../../pages/popular-pharmacy/notification/notification/notification.component';
import { RemedyLifecycleComponent } from '../../pages/budget/remedy-lifecycle/remedy-lifecycle.component';
import { OccurrenceTypesComponent } from '../../pages/popular-pharmacy/notification/occurrence-types/occurrence-types.component';
import { FormElucidationComponent } from '../../pages/popular-pharmacy/notification/form-elucidation/form-elucidation.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { MulctComponent } from '../../pages/popular-pharmacy/mulct/mulct.component';
import { TransactionsFilterPipe } from '../../pipes/filters/transactions-filter.pipe';
import { ReplacePipe } from '../../pipes/filters/replace.pipe';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/br';
import { MedicationComponent } from 'src/app/pages/analytic/medication/medication.component';

registerLocaleData(localeBr);

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AppLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule
  ],
  exports: [
    LoaderComponent
  ],
  declarations: [
    LoaderComponent,
    DashboardComponent,
    PloaComponent,
    AnalyticPage,
    ElucidationComponent,
    NotificationComponent,
    DashboardComponent,
    RemedyLifecycleComponent,
    OccurrenceTypesComponent,
    FormElucidationComponent,
    MulctComponent,
    TransactionsFilterPipe,
    ReplacePipe,
    MedicationComponent,
  ]
})

export class AppLayoutModule {}
