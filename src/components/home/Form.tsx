import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { isNull } from 'util';

import { useNames } from '../../hooks';
import { firstLetterUpperAndRestLowerCase } from '../../utils/string';

const Form = () => {
  const names = useNames();
  const [name, setName] = useState('');
  const [error, setError] = useState('');
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
    } else setError(`Pokemon ${name} does not exists.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        disabled={isNull(names)}
        type="text"
        onChange={handleChange}
        value={name}
      />
      {error && <p>{error}</p>}
    </form>
  );
};

export default Form;
