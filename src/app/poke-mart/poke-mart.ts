import { Component, inject } from '@angular/core';
import { PokeMartService } from '../poke-mart.service';

@Component({
  selector: 'app-poke-mart',
  standalone: true,
  imports: [],
  styleUrl: './poke-mart.css',
  templateUrl: './poke-mart.html' 
})
export class PokeMart {
  pokeMartService = inject(PokeMartService);
}