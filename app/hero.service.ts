import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }
}

// The consumer of our service doesn't know how the service gets the data.
// Our HeroService could get Hero data from anywhere.
// It could get the data from a web service or local storage or from a mock data source.
// That's the beauty of removing data access from the component.
// We can change our minds about the implementation as often as we like,
// for whatever reason, without touching any of the components that need heroes. - Angular Tutorial (Very important point)
