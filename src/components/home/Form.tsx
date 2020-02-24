import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Input from './Input';
import { SForm, SLabel } from './Form.style';
import { useNames } from '../../hooks';
import { firstLetterUpperAndRestLowerCase } from '../../utils/string';

const Form = () => {
  const names = useNames();
  const [name, setName] = useState('');
  const history = useHistory();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!names) return;

    const formattedName = firstLetterUpperAndRestLowerCase(name);
    if (names.includes(formattedName)) {
      history.push(`/pokemon/${formattedName}`);
    }
  };

  return (
    <SForm onSubmit={handleSubmit}>
      <SLabel> Enter pokemon name</SLabel>
      <Input onChange={handleChange} name={name} />
    </SForm>
  );
};

export default Form;
