import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import {ArtistaComponent} from './components/artista/artista.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuardService} from './components/services/auth-guard.service.ts.guard';
import {AccessTokenComponent} from './components/access-token/access-token.component';

const APP_ROUTES: Routes = [

  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistaComponent, canActivate: [AuthGuardService] },
  { path: 'access_token', component: AccessTokenComponent },
  { path: '**',  pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true} );
