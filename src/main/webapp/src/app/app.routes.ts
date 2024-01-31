import { Routes } from '@angular/router';
import {AccessDeniedComponent} from "./components/access-denied/access-denied.component";
import {AuthGuard} from "./security/guard/authguard.guard";
import {AdminComponent} from "./components/admin/admin.component";
import {ManagerComponent} from "./components/manager/manager.component";

export const routes: Routes = [
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate:[AuthGuard],
    data: {roles: ['ROLE_ADMIN']}
  },
  {
    path: 'manager',
    component: ManagerComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_MANAGER']}
  }
];
