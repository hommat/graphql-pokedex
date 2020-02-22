import React from 'react';

import styled from '../../styles';
import PokemonType from './PokemonType';
import { PokemonType as Type } from '../../types';

type Props = {
  types: Type[];
};

const SPokemonTypeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

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
