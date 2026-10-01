import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokeCart } from './poke-cart';

describe('PokeCart', () => {
  let component: PokeCart;
  let fixture: ComponentFixture<PokeCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeCart],
    }).compileComponents();

    fixture = TestBed.createComponent(PokeCart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
