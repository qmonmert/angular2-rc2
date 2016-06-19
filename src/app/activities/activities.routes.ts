import { ActivityListComponent } from './activity-list.component';
import { ActivityDetailComponent } from './activity-detail.component';

export const ActivitiesRoutes = [
  { path: '/activities',  component: ActivityListComponent },
  { path: '/activity/:id', component: ActivityDetailComponent }
];