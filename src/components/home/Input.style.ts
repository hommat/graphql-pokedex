import styled from '../../styles';

type InputProps = {
  error: boolean;
  value: string;
};

type ListItemProps = {
  selected: boolean;
};

export const SInput = styled.input<InputProps>`
  border: 1px solid
    ${props =>
      props.disabled || props.value.length === 0
        ? 'black'
        : props.error
        ? 'red'
        : 'black'};
  width: 100%;
`;

export const SList = styled.ul`
  width: 100%;
`;

export const SListItem = styled.li<ListItemProps>`
  background: ${props => (props.selected ? 'blue' : 'white')};
  &:hover {
    background: grey;
  }
`;
