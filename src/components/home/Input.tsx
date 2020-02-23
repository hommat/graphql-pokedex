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
  Enter = 13
}

const Input: React.FC<Props> = ({ name, onChange }) => {
  const history = useHistory();
  const names = useNames();
  const [state, setState] = useState<State>({
    autoCompleteOpen: false,
    selectedIndex: -1
  });

  const { autoCompleteOpen, selectedIndex } = state;
  const formattedName = firstLetterUpperAndRestLowerCase(name);
  const autoCompleteNames = names
    ? names.filter(n => n.includes(formattedName))
    : [];
  const isNameValid = names && names.includes(formattedName);

  const handleBlur = () => setState({ ...state, autoCompleteOpen: false });
  const handleFocus = () => {
    setState({ ...state, autoCompleteOpen: true, selectedIndex: -1 });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, selectedIndex: -1 });
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
      case KeyCode.Enter:
        handleEnterPress();
        break;
    }
  };

  const handleArrowDownPress = () => {
    if (selectedIndex === autoCompleteNames.length - 1) {
      setState({ ...state, selectedIndex: 0 });
    } else setState({ ...state, selectedIndex: selectedIndex + 1 });
  };

  const handleArrowUpPress = () => {
    if (selectedIndex === -1 || selectedIndex === 0) {
      setState({ ...state, selectedIndex: autoCompleteNames.length - 1 });
    } else setState({ ...state, selectedIndex: selectedIndex - 1 });
  };

  const handleEnterPress = () => {
    if (selectedIndex >= 0) {
      const selectedName = autoCompleteNames[selectedIndex];
      history.push(`/pokemon/${selectedName}`);
    }
  };

  const handleOptionMouseDown = (value: string) => {
    history.push(`/pokemon/${value}`);
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
          {autoCompleteNames.map((value, index) => (
            <SListItem
              selected={selectedIndex === index}
              key={value}
              onMouseDown={() => handleOptionMouseDown(value)}
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
