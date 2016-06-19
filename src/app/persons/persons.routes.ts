import { PersonListComponent } from './person-list.component';
import { PersonDetailComponent } from './person-detail.component';

export const PersonsRoutes = [
  { path: '/persons',  component: PersonListComponent },
  { path: '/person/:id', component: PersonDetailComponent }
];