import {Planet} from '../planet';
import {pickImageUrlRandomly} from '../random-image-url-picker';
import {PlanetResponse} from './data-validation';

export const transformPlanets = (planets: PlanetResponse[]): Planet[] => {
  return planets.map(transformPlanet);
};

const transformPlanet = (planet: PlanetResponse): Planet => {
  return {
    terrain: planet.terrain,
    climate: planet.climate,
    image: pickImageUrlRandomly(),
    name: planet.name,
    population: planet.population,
  };
};
