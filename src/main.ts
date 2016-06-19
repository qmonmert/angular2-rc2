import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angular2Rc2AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2Rc2AppComponent, [APP_ROUTER_PROVIDERS]);
