import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { isNull } from 'util';

import Loader from '../components/pokemon/Loader';
import Details from '../components/pokemon/Details';
import { useNames } from '../hooks';
import { firstLetterUpperAndRestLowerCase } from '../utils/string';

const PokemonPage = () => {
  const names = useNames();
  const { name } = useParams<{ name: string }>();
  if (isNull(names)) return <Loader />;

  const formattedName = firstLetterUpperAndRestLowerCase(name);
  if (!names.includes(formattedName)) return <Redirect to="/" />;

  return <Details pokemonName={name} />;
};

export default PokemonPage;
