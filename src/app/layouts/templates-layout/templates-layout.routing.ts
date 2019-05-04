import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/templates/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/templates/icons/icons.component';
import { MapsComponent } from '../../pages/templates/maps/maps.component';
import { UserProfileComponent } from '../../pages/templates/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/templates/tables/tables.component';

export const TemplatesLayoutRoutes: Routes = [
    { path: 'icons',          component: IconsComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'maps',           component: MapsComponent }
];
