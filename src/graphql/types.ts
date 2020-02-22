import { Pokemon } from '../types';

export type AllPokemonNamesData = {
  pokemons: { name: string }[];
};

export type PokemonData = {
  pokemon: Pokemon | null;
};
