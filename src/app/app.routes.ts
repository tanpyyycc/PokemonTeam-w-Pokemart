import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemartComponent } from './components/pokemart/pokemart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemon', component: PokemonListComponent },
  { path: 'pokemart', component: PokemartComponent },
  { path: '**', redirectTo: '' }
];