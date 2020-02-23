import styled from '../../styles';
import { PokemonType as Type } from '../../types';

type PokemonTypeProps = {
  type: Type;
};

export const SPokemonType = styled.div<PokemonTypeProps>`
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
