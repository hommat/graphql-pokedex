import React from 'react';

import { SPokemonType } from './Type.style';
import { PokemonType as Type } from '../../types';

type Props = {
  type: Type;
};

const PokemonType: React.FC<Props> = ({ type, children }) => {
  return <SPokemonType type={type}>{children}</SPokemonType>;
};

export default PokemonType;
