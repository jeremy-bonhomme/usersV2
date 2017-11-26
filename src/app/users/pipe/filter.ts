import { Pipe, PipeTransform } from '@angular/core';

import { UserM } from '../model';

@Pipe( {
  name: 'appFilter',
} )
export class FilterP implements PipeTransform {

  public transform( user: UserM[], search: string, i: number ): UserM[] | undefined {
    if ( !search.length ) {
      return( user );
    } else {
      return user.filter( ( c ) => c.name.toLowerCase().includes( search.toLowerCase() ) );
    }
  }
  
}