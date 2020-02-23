export type Pokemon = {
  name: string;
  number: string;
  weight: PokemonDimension;
  height: PokemonDimension;
  types: PokemonType[];
  resistant: PokemonType[] | null;
  attacks: {
    fast: PokemonAttack[] | null;
    special: PokemonAttack[] | null;
  };
  weaknesses: PokemonType[] | null;
  fleeRate: number;
  maxCP: number;
  evolutions: PokemonEvolution[] | null;
  maxHP: number;
  classification: string;
  image: string;
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

export type PokemonType =
  | 'Grass'
  | 'Poison'
  | 'Fire'
  | 'Flying'
  | 'Water'
  | 'Bug'
  | 'Normal'
  | 'Electric'
  | 'Ground'
  | 'Fairy'
  | 'Fighting'
  | 'Psychic'
  | 'Rock'
  | 'Steel'
  | 'Ice'
  | 'Ghost'
  | 'Dragon'
  | 'Dark';
