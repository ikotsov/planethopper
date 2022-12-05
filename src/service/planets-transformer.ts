import {idCreator} from '../id-creator';
import {PlanetType} from '../planet-type';
import {pickImageUrlRandomly} from '../random-image-url-picker';
import {formatInUSLocale} from '../us-locale-formatter';
import {PlanetResponse} from './data-validation';

export const transformPlanets = (planets: PlanetResponse[]): PlanetType[] => {
  return planets.map(transformPlanet);
};

const transformPlanet = (planet: PlanetResponse): PlanetType => {
  const population = Number(planet.population);

  return {
    terrain: planet.terrain,
    climate: planet.climate,
    image: pickImageUrlRandomly(),
    name: planet.name,
    population: Number.isNaN(population)
      ? 'unknown'
      : formatInUSLocale(population),
    id: createPlanetId(),
  };
};

const createPlanetId = idCreator('planet');
