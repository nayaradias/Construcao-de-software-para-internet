import { Routes, RouterModule } from '@angular/router';
import { NAVBAR_ROUTES } from '../app/components/navbar/navbar.routers';
import { NavbarComponent } from '../app/components/navbar/navbar.component';

const APP_ROUTER: Routes = [
   { path: '', component: NavbarComponent, children: NAVBAR_ROUTES }
];
export const myrouting = RouterModule.forRoot(APP_ROUTER);
