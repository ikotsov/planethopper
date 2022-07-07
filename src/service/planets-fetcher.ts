const MAIN_URL = 'https://swapi.dev/api/planets';

export const fetchPlanets = async (page: string) => {
  const response = await fetch(`${MAIN_URL}?page=${page}`);
  return response.json();
};
