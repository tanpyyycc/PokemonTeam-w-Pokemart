import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PokemonList } from './pokemon-list/pokemon-list';
import { PokeMart } from './poke-mart/poke-mart';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'pokemon', component: PokemonList },
  { path: 'pokemart', component: PokeMart },
  { path: '**', redirectTo: '' }
];