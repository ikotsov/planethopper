import {useCallback, useEffect, useReducer} from 'react';
import {PlanetType} from '../planet-type';
import {fetchPlanets} from './planets-fetcher';
import {transformPlanets} from './planets-transformer';

type NetworkStatus = 'loading' | 'success' | 'error';

type State = {
  planets: PlanetType[];
  page: number;
  status: NetworkStatus;
};

type FETCH_PLANETS = {type: 'FETCH_PLANETS'};
type SET_PLANETS = {
  type: 'SET_PLANETS';
  planets: PlanetType[];
};

type Action = FETCH_PLANETS | SET_PLANETS;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_PLANETS':
      return {...state, status: 'loading', page: state.page + 1};
    case 'SET_PLANETS':
      return {
        ...state,
        status: 'success',
        planets: [...state.planets, ...action.planets],
      };
    default:
      throw new Error();
  }
};

const initialState: State = {
  planets: [],
  page: 1,
  status: 'loading',
};

export const usePlanets = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const tryFetchPlanets = async () => {
      try {
        const pageCastedToString = state.page.toString();
        const planetsPayload = await fetchPlanets(pageCastedToString);
        const planetsUI = transformPlanets(planetsPayload.results);

        dispatch({
          type: 'SET_PLANETS',
          planets: planetsUI,
        });
      } catch (error) {
        // TODO: Handle and Log error
      }
    };
    tryFetchPlanets();
  }, [state.page]);

  const fetchMore = useCallback(() => {
    dispatch({type: 'FETCH_PLANETS'});
  }, []);

  return {
    currentPage: state.page,
    planets: state.planets,
    isLoading: state.status === 'loading',
    fetchMore,
  };
};
