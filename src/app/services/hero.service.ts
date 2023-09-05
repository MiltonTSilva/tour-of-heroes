import { Injectable } from '@angular/core';
import { heroesMock } from 'src/app/mock/mock-heroes';
import { Hero } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Hero[] {
    return heroesMock;
  }
}
