import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { UserM } from '../../model';
import { UserS } from '../../service';

@Component( {
  selector: 'app-details',
  styleUrls: [ './details.css' ],
  templateUrl: './details.html',
} )
export class UserDetailsC {
  public id: number;
  public user: UserM;

  public constructor( protected _activatedRoute: ActivatedRoute, protected _userS: UserS ) { }

  public ngOnInit(): void {
    this._activatedRoute.params.subscribe( ( params: Params ) => {
      params.id ? this.id = params.id : this.id = 0;
      this._userS.getUser( this.id ).subscribe( ( user: UserM ) => {
        this.user = user;
      } );
    } );
  }

}
