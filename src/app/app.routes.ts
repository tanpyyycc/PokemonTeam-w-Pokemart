import { Routes } from '@angular/router';
import { FavPokeTeam } from './fav-poke-team/fav-poke-team';
import { PokeMart } from './poke-mart/poke-mart';
import { PokeCart } from './poke-cart/poke-cart';

export const routes: Routes = [
  { path: '', redirectTo: 'pokemon-team', pathMatch: 'full' },
  { path: 'pokemon-team', component: FavPokeTeam },
  { path: 'poke-mart', component: PokeMart },
  { path: 'poke-cart', component: PokeCart },
  { path: '**', redirectTo: 'pokemon-team' }
];
