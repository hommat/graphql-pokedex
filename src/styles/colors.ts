import { PokemonType } from '../types';

type Colors = {
  background: string;
  light: string;
  dark: string;
  types: {
    [type in PokemonType]: TypeColor;
  };
};

type TypeColor = {
  background: string;
  border: string;
};

const colors: Colors = {
  background: '#fafafa',
  light: 'rgba(255, 255, 255, 0.89)',
  dark: 'rgba(0, 0, 0, 0.89)',
  types: {
    Dark: {
      background: '#705848',
      border: '#49392f'
    },
    Bug: {
      background: '#a8b820',
      border: '#6d7815'
    },
    Dragon: {
      background: '#7038f8',
      border: '#4924a1'
    },
    Electric: {
      background: '#f8d030',
      border: '#a1871f'
    },
    Fairy: {
      background: '#ee99ac',
      border: '#9b6470'
    },
    Fighting: {
      background: '#c03028',
      border: '#7d1f1a'
    },
    Fire: {
      background: '#f08030',
      border: '#9c531f'
    },
    Flying: {
      background: '#a890f0',
      border: '#6d5e9c'
    },
    Ghost: {
      background: '#705898',
      border: '#493963'
    },
    Grass: {
      background: '#78c850',
      border: '#4e8234'
    },
    Ground: {
      background: '#e0c068',
      border: '#927d44'
    },
    Ice: {
      background: '#98d8d8',
      border: '#638d8d'
    },
    Normal: {
      background: '#a8a878',
      border: '#6d6d4e'
    },
    Poison: {
      background: '#a040a0',
      border: '#682a68'
    },
    Psychic: {
      background: '#f85888',
      border: '#a13959'
    },
    Rock: {
      background: '#b8a038',
      border: '#786824'
    },
    Steel: {
      background: '#b8b8d0',
      border: '#787887'
    },
    Water: {
      background: '#6890f0',
      border: '#445e9c'
    }
  }
};

export default colors;
