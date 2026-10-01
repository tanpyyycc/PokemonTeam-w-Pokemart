import { Injectable, signal, computed } from '@angular/core';

export interface Pokemon {
  name: string;
  type: string;
  heldItem: string;
  description: string;
  region: 'Kanto' | 'Johto' | 'Hoenn';
}

export interface MartItem {
  id: number;
  name: string;
  price: number;
  category: string;
}

export interface CartItem {
  item: MartItem;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonStoreService {
  private pokemonList = signal([
    { name: 'Charizard', type: 'Fire / Flying', heldItem: 'Charizardite X', description: 'Spits fire that is hot enough to melt boulders.', region: 'Kanto' },
    { name: 'Pikachu', type: 'Electric', heldItem: 'Light Ball', description: 'It has small electric sacs on its cheeks.', region: 'Kanto' },
    { name: 'Typhlosion', type: 'Fire', heldItem: 'Charcoal', description: 'It attacks using blistering blasts of fire.', region: 'Johto' },
    { name: 'Espeon', type: 'Psychic', heldItem: 'Twisted Spoon', description: 'The tip of its split tail twitches when it is predicting its opponents moves.', region: 'Johto' },
    { name: 'Blaziken', type: 'Fire / Fighting', heldItem: 'Expert Belt', description: 'Flames spew from its wrists, scorching its opponents.', region: 'Hoenn' },
    { name: 'Gardevoir', type: 'Psychic / Fairy', heldItem: 'Choice Specs', description: 'It has the psychokinetic power to distort dimensions.', region: 'Hoenn' }
  ]);

  private martItems = signal([
    { id: 1, name: 'Poké Ball', price: 200, category: 'Ball' },
    { id: 2, name: 'Great Ball', price: 600, category: 'Ball' },
    { id: 3, name: 'Ultra Ball', price: 1200, category: 'Ball' },
    { id: 4, name: 'Potion', price: 300, category: 'Medicine' },
    { id: 5, name: 'Super Potion', price: 700, category: 'Medicine' },
    { id: 6, name: 'Hyper Potion', price: 1200, category: 'Medicine' },
    { id: 7, name: 'Revive', price: 1500, category: 'Medicine' },
    { id: 8, name: 'Full Heal', price: 600, category: 'Medicine' },
    { id: 9, name: 'Max Repel', price: 700, category: 'Other' },
    { id: 10, name: 'Rare Candy', price: 4800, category: 'Valuable' }
  ]);

  private cart = signal([]);

  readonly pokemons = this.pokemonList.asReadonly();
  readonly items = this.martItems.asReadonly();
  readonly cartItems = this.cart.asReadonly();

  readonly cartTotal = computed(() => {
    return this.cart().reduce((total, curr) => total + (curr.item.price * curr.quantity), 0);
  });

  addToCart(item: MartItem) {
    this.cart.update(currentCart => {
      const existingIndex = currentCart.findIndex(ci => ci.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...currentCart];
        updated[existingIndex] = { ...updated[existingIndex], quantity: updated[existingIndex].quantity + 1 };
        return updated;
      }
      return [...currentCart, { item, quantity: 1 }];
    });
  }

  removeFromCart(itemId: number) {
    this.cart.update(currentCart => currentCart.filter(ci => ci.item.id !== itemId));
  }
}