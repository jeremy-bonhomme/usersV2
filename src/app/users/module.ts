import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { UserDetailsC } from './handler/details';
import { UserListC } from './handler/list';
import { FilterP } from './pipe/filter';
import { UserS } from './service';

@NgModule( {
  declarations: [
    FilterP,
    UserListC,
    UserDetailsC,
  ],
  exports: [
    FilterP,
    UserListC,
    UserDetailsC,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  providers: [ UserS ],
} )
export class UserMD { }
