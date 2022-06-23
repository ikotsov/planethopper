import {isRight} from 'fp-ts/lib/Either';
import * as D from 'io-ts/Decoder';

const Result = D.struct({
  name: D.string,
  rotation_period: D.string,
  orbital_period: D.string,
  diameter: D.string,
  climate: D.string,
  gravity: D.string,
  terrain: D.string,
  surface_water: D.string,
  population: D.string,
  residents: D.array(D.string),
  films: D.array(D.string),
  created: D.string,
  edited: D.string,
  url: D.string,
});

type PlanetList = D.TypeOf<typeof PlanetList>;
const PlanetList = D.struct({
  count: D.number,
  next: D.string,
  previous: D.nullable(D.string),
  results: D.array(Result),
});

export const isPlanetList = (data: unknown): data is PlanetList => {
  return isRight(PlanetList.decode(data));
};
