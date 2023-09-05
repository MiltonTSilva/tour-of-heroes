import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero.interface';
import { heroesMock } from 'src/app/mock/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  hero: Hero = { id: 1, nome: 'Wolverine' };
  heroes = heroesMock;

  selectedHero?: Hero;

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
