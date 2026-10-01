import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonStoreService, Pokemon } from '../services/pokemon-store.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css'
})
export class PokemonList {
  store = inject(PokemonStoreService);
}