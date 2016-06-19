import { provideRouter, RouterConfig } from '@angular/router';

import { ActivitiesRoutes } from './activities/activities.routes';
import { PersonsRoutes } from './persons/persons.routes';

const routes: RouterConfig = [
  ...ActivitiesRoutes,
  ...PersonsRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
