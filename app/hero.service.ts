import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}

// The consumer of our service doesn't know how the service gets the data.
// Our HeroService could get Hero data from anywhere.
// It could get the data from a web service or local storage or from a mock data source.
// That's the beauty of removing data access from the component.
// We can change our minds about the implementation as often as we like,
// for whatever reason, without touching any of the components that need heroes. - Angular Tutorial (Very important point)
