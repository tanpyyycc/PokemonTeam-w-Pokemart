import { Component, inject } from '@angular/core';
import { PokeMartService } from '../poke-mart.service';
@Component({
  selector: 'app-poke-cart',
  standalone: true,
  template: `
    <div style="border-top: 2px solid #000; padding: 15px; margin-top: 20px;">
      <h3>🛒 Shopping Cart</h3>
      @for (item of shopService.cart(); track $index) {
        <div>{{ item.name }} - ₱{{ item.price }}</div>
      } @empty {
        <p>Cart is empty.</p>
      }
      <hr>
      <h4>Total: ₱{{ shopService.totalPrice() }}</h4>
      <button (click)="shopService.clearCart()">Checkout / Clear</button>
    </div>
  `
})
export class PokeCart {
  shopService = inject(PokeMartService);
}