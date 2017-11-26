import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { UserM } from '../../model';
import { UserS } from '../../service';

@Component( {
  selector: 'app-list',
  templateUrl: './list.html',
} )
export class UserListC implements OnInit {
  public search: string = '';
  public users: Array<UserM> = [];

  public constructor( protected _userS: UserS ) {}

  public ngOnInit(): void {
    this._userS.users.subscribe( ( users: UserM[] ) => {
      this.users = users;
    } );
  }
}