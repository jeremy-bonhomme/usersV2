import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AppC } from '../main/component';
import { UserDetailsC } from '../users/handler/details';
import { UserListC } from '../users/handler/list';

const APP_ROUTES: Route [] = [
  { path: '', component: UserListC },
  { path: ':id', component: UserDetailsC },
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot( APP_ROUTES );
