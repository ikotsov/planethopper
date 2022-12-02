import {isRight} from 'fp-ts/lib/Either';
import * as D from 'io-ts/Decoder';

export type PlanetResponse = D.TypeOf<typeof PlanetDecoder>;
const PlanetDecoder = D.struct({
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

type PlanetListResponse = D.TypeOf<typeof PlanetListDecoder>;
const PlanetListDecoder = D.struct({
  count: D.number,
  next: D.string,
  previous: D.nullable(D.string),
  results: D.array(PlanetDecoder),
});

export const isPlanetListResponse = (
  data: unknown,
): data is PlanetListResponse => {
  return isRight(PlanetListDecoder.decode(data));
};
