import React, { ChangeEvent, Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SInput, SList, SListItem } from './Input.style';
import { firstLetterUpperAndRestLowerCase } from '../../utils/string';
import { useNames } from '../../hooks';

type Props = {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type State = {
  autoCompleteOpen: boolean;
  selectedIndex: number;
};

enum KeyCode {
  ArrowDown = 40,
  ArrowUp = 38,
  Enter = 13,
  Escape = 27
}

const initState: State = {
  autoCompleteOpen: false,
  selectedIndex: -1
};

const Input: React.FC<Props> = ({ name, onChange }) => {
  const history = useHistory();
  const names = useNames();
  const [state, setState] = useState<State>(initState);

  const { autoCompleteOpen, selectedIndex } = state;
  const formattedName = firstLetterUpperAndRestLowerCase(name);
  const autoNames = names ? names.filter(n => n.includes(formattedName)) : [];
  const isNameValid = names && names.includes(formattedName);

  const redirectToPokemon = (v: string) => history.push(`/pokemon/${v}`);

  const handleBlur = () => setState({ ...state, autoCompleteOpen: false });

  const handleFocus = () => {
    setState({ ...state, autoCompleteOpen: true, selectedIndex: -1 });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, autoCompleteOpen: true, selectedIndex: -1 });
    onChange(e);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.keyCode) {
      case KeyCode.ArrowDown:
        e.preventDefault();
        handleArrowDownPress();
        break;
      case KeyCode.ArrowUp:
        e.preventDefault();
        handleArrowUpPress();
        break;
      case KeyCode.Escape:
        e.preventDefault();
        handleEscapePress();
        break;
      case KeyCode.Enter:
        handleEnterPress();
        break;
    }
  };

  const handleArrowDownPress = () => {
    if (selectedIndex === autoNames.length - 1) {
      setState({ ...state, selectedIndex: 0 });
    } else setState({ ...state, selectedIndex: selectedIndex + 1 });
  };

  const handleArrowUpPress = () => {
    if (selectedIndex === -1 || selectedIndex === 0) {
      setState({ ...state, selectedIndex: autoNames.length - 1 });
    } else setState({ ...state, selectedIndex: selectedIndex - 1 });
  };

  const handleEscapePress = () => setState(initState);

  const handleEnterPress = () => {
    if (selectedIndex >= 0) {
      const selectedName = autoNames[selectedIndex];
      redirectToPokemon(selectedName);
    }
  };

  return (
    <Fragment>
      <SInput
        disabled={!names}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        value={name}
        error={!isNameValid}
        onFocus={handleFocus}
        onBlur={handleBlur}
        id="pokemon"
        autoComplete="off"
      />
      {autoCompleteOpen && name.length > 0 && (
        <SList>
          {autoNames.map((value, index) => (
            <SListItem
              selected={selectedIndex === index}
              key={value}
              onMouseDown={() => redirectToPokemon(value)}
            >
              {value}
            </SListItem>
          ))}
        </SList>
      )}
    </Fragment>
  );
};

export default Input;
