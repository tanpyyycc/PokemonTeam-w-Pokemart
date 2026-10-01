import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokeMart } from './poke-mart';

describe('PokeMart', () => {
  let component: PokeMart;
  let fixture: ComponentFixture<PokeMart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeMart],
    }).compileComponents();

    fixture = TestBed.createComponent(PokeMart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
