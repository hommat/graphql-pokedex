import { useContext } from 'react';

import { NamesContext } from '../context/names';

export default function() {
  const pokemons = useContext(NamesContext);

  return pokemons;
}
