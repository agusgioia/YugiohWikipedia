import { Routes } from '@angular/router';
import { ArchetypeComponent } from './archetype/archetype.component';
import { AllCardsComponent } from './all-cards/all-cards.component';
import { AboutItComponent } from './about-it/about-it.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path: 'archetype', component: ArchetypeComponent},
  { path: 'all-cards', component: AllCardsComponent},
  { path: 'about-it', component: AboutItComponent},
  { path: 'search', component:SearchComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // Redirige al home si la ruta está vacía
  { path: '**', redirectTo: 'home', pathMatch:'full' } 
];
