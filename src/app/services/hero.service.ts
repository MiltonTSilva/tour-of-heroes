import { Injectable } from '@angular/core';
import { heroesMock } from 'src/app/mock/mock-heroes';
import { Hero } from '../interfaces/hero.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(heroesMock);

    return heroes;
  }
}
