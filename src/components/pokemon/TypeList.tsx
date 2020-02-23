import React from 'react';

import PokemonType from './Type';
import { SPokemonTypeList } from './TypeList.style';
import { PokemonType as Type } from '../../types';

type Props = {
  types: Type[];
};

const PokemonTypeList: React.FC<Props> = ({ types }) => {
  return (
    <SPokemonTypeList>
      {types.map(type => (
        <li key={type}>
          <PokemonType type={type}>{type}</PokemonType>
        </li>
      ))}
    </SPokemonTypeList>
  );
};

export default PokemonTypeList;
