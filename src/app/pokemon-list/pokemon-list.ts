import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonStoreService } from '../../services/pokemon-store.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  template: ` 
  @for (poke of store.pokemons(); track poke.name) { 
    {{ poke.name }} ({{ poke.region }})
  Type: {{ poke.type }}
    Held Item: {{ poke.heldItem }}
    {{ poke.description }}
}
`
})
export class PokemonList {
  store = inject(PokemonStoreService)
}
