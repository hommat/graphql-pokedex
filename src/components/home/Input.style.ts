import styled, { css } from '../../styles';

type InputProps = {
  error: boolean;
  value: string;
  listOpen: boolean;
};

type ListItemProps = {
  selected: boolean;
};

const borderRadius = '10px';

export const SInput = styled.input<InputProps>`
  font-size: 1.2rem;
  padding: 0.4rem;
  border: 1px solid
    ${props =>
      props.disabled
        ? 'grey'
        : props.error && props.value !== ''
        ? 'red'
        : 'black'};
  width: 100%;
  color: black;
  text-align: center;
  overflow: hidden;
  border-radius: ${borderRadius};

  &:focus {
    outline: none;

    ${props =>
      props.listOpen &&
      css`
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      `}
  }
`;

export const SList = styled.ul`
  font-size: 1.03rem;
  width: 100%;
  text-align: center;
  overflow: hidden;
  border-bottom-left-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
  border: 1px solid black;
  border-top: 0;
`;

export const SListItem = styled.li<ListItemProps>`
  padding: 0.3rem;
  color: black;
  background: ${props =>
    props.selected ? 'grey' : props.theme.colors.background};
  transition: ${props => props.theme.transitions.fast};
  border-bottom: 1px solid black;

  &:hover {
    background: grey;
    color: black;
  }

  &:last-child {
    border: 0;
  }
`;
