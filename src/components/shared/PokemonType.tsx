import React from 'react';

import styled from '../../styles';
import { PokemonType as Type } from '../../types';

type Props = {
  type: Type;
};

const SPokemonType = styled.div<Props>`
  padding: 0.4rem 0;
  margin: 0.2rem;
  text-align: center;
  border-radius: 8px;
  font-weight: bold;
  width: 100px;
  font-size: 0.95rem;
  color: ${props => props.theme.colors.dark};
  background: ${props => props.theme.colors.types[props.type].background};
  border: 1px solid ${props => props.theme.colors.types[props.type].border};
`;

const PokemonType: React.FC<Props> = ({ type, children }) => {
  return <SPokemonType type={type}>{children}</SPokemonType>;
};

export default PokemonType;
