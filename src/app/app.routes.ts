import { Routes } from '@angular/router';
import { ArchetypeComponent } from './archetype/archetype.component';
import { AllCardsComponent } from './all-cards/all-cards.component';
import { AboutItComponent } from './about-it/about-it.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
  { path:'home', component:HomeComponent,canActivate:[AuthGuard]},
  { path: 'archetype', component: ArchetypeComponent,canActivate:[AuthGuard]},
  { path: 'all-cards', component: AllCardsComponent,canActivate:[AuthGuard]},
  { path: 'about-it', component: AboutItComponent,canActivate:[AuthGuard]},
  { path: 'search', component:SearchComponent,canActivate:[AuthGuard]},
  { path:'login', component:LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // Redirige al home si la ruta está vacía
  { path: '**', redirectTo: 'login', pathMatch:'full' } 
];
