import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavPokeTeam } from './fav-poke-team';

describe('FavPokeTeam', () => {
  let component: FavPokeTeam;
  let fixture: ComponentFixture<FavPokeTeam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavPokeTeam],
    }).compileComponents();

    fixture = TestBed.createComponent(FavPokeTeam);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
