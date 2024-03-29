import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { TemplatesLayoutRoutes } from './templates-layout.routing';
import { DashboardComponent } from '../../pages/templates/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/templates/icons/icons.component';
import { MapsComponent } from '../../pages/templates/maps/maps.component';
import { UserProfileComponent } from '../../pages/templates/user-profile/user-profile.component';
import { TwoTableComponent } from '../../pages/templates/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TemplatesLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    UserProfileComponent,
    DashboardComponent,
    TwoTableComponent,
    IconsComponent,
    MapsComponent
  ]
})

export class TemplatesLayoutModule {}
