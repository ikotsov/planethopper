import {idCreator} from '../idCreator';
import {PlanetType} from '../planet-type';
import {pickImageUrlRandomly} from '../random-image-url-picker';
import {PlanetResponse} from './data-validation';

export const transformPlanets = (planets: PlanetResponse[]): PlanetType[] => {
  return planets.map(transformPlanet);
};

const transformPlanet = (planet: PlanetResponse): PlanetType => {
  return {
    terrain: planet.terrain,
    climate: planet.climate,
    image: pickImageUrlRandomly(),
    name: planet.name,
    population: planet.population,
    id: createPlanetId(),
  };
};

const createPlanetId = idCreator('planet');
