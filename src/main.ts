import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppMD } from './app/main/module';

if ( environment.production ) { enableProdMode(); }

platformBrowserDynamic().bootstrapModule( AppMD )
  .catch( ( err ) => console.log( err ) );
