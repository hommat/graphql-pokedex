import React, { createContext, useState, useEffect } from 'react';

import { useQuery } from '../hooks';
import { GET_ALL_POKEMON_NAMES } from '../graphql/queries';
import { AllPokemonNamesData } from '../graphql/types';

type Context = string[] | null;

export const NamesContext = createContext<Context>([]);

export const NamesProvider: React.FC = ({ children }) => {
  const [names, setNames] = useState<Context>(null);
  const { data } = useQuery<AllPokemonNamesData>(GET_ALL_POKEMON_NAMES);

  useEffect(() => {
    if (data) {
      const newNames = data?.pokemons.map(({ name }) => name);
      setNames(newNames);
    }
  }, [data]);

  return (
    <NamesContext.Provider value={names}>{children}</NamesContext.Provider>
  );
};
