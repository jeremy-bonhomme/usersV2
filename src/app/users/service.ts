import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { UserM } from './model';

@Injectable()
export class UserS {
  public error;
  public users: BehaviorSubject<UserM[]> = new BehaviorSubject( null );

  public constructor( protected http: HttpClient ) {
    this.usersInit();
  }

  public usersInit() {
    this.http.get( 'https://jsonplaceholder.typicode.com/users' )
    .subscribe( ( users: UserM[] ) => {
      this.users.next( users );
    },
    ( err: HttpErrorResponse ) => {
        this.error = Observable.of( err.status );
    } );

  }

  public getUser( id: number ): Observable<UserM> {
    return this.users.filter( ( users ) => users !== null ).map( ( users ) => users[ id - 1 ] );
  }

}
