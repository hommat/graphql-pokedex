import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { useQuery } from '../../hooks';
import { GET_ALL_POKEMON_NAMES } from '../../graphql/queries';
import { AllPokemonNamesData } from '../../graphql/types';
import { firstLetterUpperAndRestLowerCase } from '../../utils/string';

const Form = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const { loading, data } = useQuery<AllPokemonNamesData>(
    GET_ALL_POKEMON_NAMES
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formattedValue = firstLetterUpperAndRestLowerCase(value);
    if (data?.pokemons.find(pokemon => pokemon.name === formattedValue)) {
      history.push(`/pokemon/${formattedValue}`);
    } else setError(`Pokemon ${value} does not exists.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        disabled={loading}
        type="text"
        onChange={handleChange}
        value={value}
      />
      <p>{error}</p>
    </form>
  );
};

export default Form;
