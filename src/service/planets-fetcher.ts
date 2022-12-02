import {isPlanetListResponse} from './data-validation';

const MAIN_URL = 'https://swapi.dev/api/planets';

export const fetchPlanets = async (page: string) => {
  const response = await fetch(`${MAIN_URL}?page=${page}`);
  const data = await response.json();
  if (isPlanetListResponse(data)) {
    return data;
  }
  throw new Error('Planet data not valid');
};
