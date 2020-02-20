export type AllPokemonNamesData = {
  pokemons: { name: string }[];
};

export type PokemonData = {
  pokemon: {
    name: string;
    number: string;
    weight: PokemonDimension;
    height: PokemonDimension;
    types: string[];
    resistant: string[] | null;
    attacks: {
      fast: PokemonAttack[] | null;
      special: PokemonAttack[] | null;
    };
    weaknesses: string[] | null;
    fleeRate: number;
    maxCP: number;
    evolutions: PokemonEvolution[] | null;
    maxHP: number;
    classification: string;
    image: string;
  } | null;
};

type PokemonDimension = {
  maximum: number;
  minimum: number;
};

type PokemonAttack = {
  name: string;
  type: string;
  damage: number;
};

type PokemonEvolution = {
  number: number;
  name: string;
  image: string;
  types: string[];
};
