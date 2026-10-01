import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeMartService } from '../poke-mart.service';

@Component({
  selector: 'app-fav-poke-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fav-poke-team.html',
  styleUrls: ['./fav-poke-team.css']
})
export class FavPokeTeamComponent {
  // Injecting your central service
  pokeService = inject(PokeMartService);
}