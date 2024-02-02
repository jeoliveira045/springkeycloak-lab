import { Routes } from '@angular/router';
import {AccessDeniedComponent} from "./components/access-denied/access-denied.component";
import {AuthGuard} from "./security/guard/authguard.guard";
import {AuthorComponent} from "./components/author/author.component";
import {BookComponent} from "./components/books/book.component";

export const routes: Routes = [
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'author',
    component: AuthorComponent,
    canActivate:[AuthGuard],
    data: {roles: ['ROLE_ADMIN']}
  },
  {
    path: 'book',
    component: BookComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_MANAGER']}
  }
];
