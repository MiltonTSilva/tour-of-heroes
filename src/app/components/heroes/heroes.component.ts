import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero.interface';
import { heroesMock } from 'src/app/mock/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes = heroesMock;

  selected?: Hero;

  onSelect(hero: Hero): void {
    this.selected = hero;
  }
}
