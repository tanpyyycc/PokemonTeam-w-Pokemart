import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeMartService, Pokemon } from '../services/poke-mart.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css'
})
export class PokemonList {
  store = inject(PokeMartService);
}