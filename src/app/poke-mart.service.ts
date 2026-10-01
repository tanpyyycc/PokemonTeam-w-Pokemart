import { Injectable, signal, computed } from '@angular/core';

export interface Pokemon {
  id: number;
  name: string;
  region: 'Kanto' | 'Johto' | 'Hoenn';
  type: string;
  heldItem: string;
  description: string;
}

export interface MartItem {
  id: number;
  name: string;
  price: number;
}

@Injectable({ providedIn: 'root' })
export class PokemonMartService {
  // 1. Regional Pokémon Collections (6 Favorite Pokémon across Kanto, Johto, Hoenn)
  pokemons = signal([
    // Kanto
    { id: 1, name: 'Charizard', region: 'Kanto', type: 'Fire / Flying', heldItem: 'Charizardite X', description: 'Flames hotter than magma that can melt anything.' },
    { id: 2, name: 'Pikachu', region: 'Kanto', type: 'Electric', heldItem: 'Light Ball', description: 'Stores electricity in its cheek pouches.' },
    // Johto
    { id: 3, name: 'Typhlosion', region: 'Johto', type: 'Fire', heldItem: 'Charcoal', description: 'Creates blazing explosive blasts to hide behind.' },
    { id: 4, name: 'Feraligatr', region: 'Johto', type: 'Water', heldItem: 'Mystic Water', description: 'Intimidates foes with huge, powerful jaws.' },
    // Hoenn
    { id: 5, name: 'Blaziken', region: 'Hoenn', type: 'Fire / Fighting', heldItem: 'Expert Belt', description: 'Leaps over towering obstacles with fiery kicks.' },
    { id: 6, name: 'Gardevoir', region: 'Hoenn', type: 'Psychic / Fairy', heldItem: 'Twisted Spoon', description: 'Can read the future and protect its Trainer.' }
  ]);

  // 2. PokéMart Inventory (At least 10 items)
  martItems = signal([
    { id: 101, name: 'Poké Ball', price: 200 },
    { id: 102, name: 'Great Ball', price: 600 },
    { id: 103, name: 'Ultra Ball', price: 1200 },
    { id: 104, name: 'Master Ball', price: 0 },
    { id: 105, name: 'Potion', price: 300 },
    { id: 106, name: 'Super Potion', price: 700 },
    { id: 107, name: 'Hyper Potion', price: 1200 },
    { id: 108, name: 'Full Restore', price: 3000 },
    { id: 109, name: 'Revive', price: 1500 },
    { id: 110, name: 'Max Repel', price: 700 }
  ]);

  // 3. Cart State Management
  private cartItems = signal([]);
  cart = this.cartItems.asReadonly();

  // 4. Computed Total Price (Automatically tracks updates)
  totalPrice = computed(() => 
    this.cartItems().reduce((sum, item) => sum + item.price, 0)
  );

  addToCart(item: MartItem) {
    this.cartItems.update(current => [...current, item]);
  }

  clearCart() {
    this.cartItems.set([]);
  }
}