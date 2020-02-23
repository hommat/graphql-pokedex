import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Loader from './Loader';
import TypeList from './TypeList';

import { useQuery } from '../../hooks';
import { GET_POKEMON_DATA } from '../../graphql/queries';
import { PokemonData } from '../../graphql/types';

type Props = {
  pokemonName: string;
};

const PokemonDetails: React.FC<Props> = ({ pokemonName }) => {
  const { data, loading } = useQuery<PokemonData>(
    GET_POKEMON_DATA(pokemonName)
  );

  if (loading) return <Loader />;

  const {
    attacks,
    classification,
    types,
    weaknesses,
    image,
    evolutions,
    fleeRate,
    height,
    maxCP,
    maxHP,
    weight,
    resistant,
    number,
    name
  } = data!.pokemon!;

  return (
    <Fragment>
      <img src={image} alt={name} />

      <h2>
        {number}. {name} - {classification}
      </h2>

      <p>Max HP: {maxHP}</p>
      <p>Max CP: {maxCP}</p>
      <p>Flee rate: {fleeRate}</p>

      <p>
        Height: {height.minimum} - {height.maximum}
      </p>
      <p>
        Weight: {weight.minimum} - {weight.maximum}
      </p>

      <p>Types</p>
      <TypeList types={types} />

      {resistant && (
        <Fragment>
          <p>Resistant</p>
          <TypeList types={resistant} />
        </Fragment>
      )}

      {weaknesses && (
        <Fragment>
          <p>Weaknesses</p>
          <TypeList types={weaknesses} />
        </Fragment>
      )}

      {attacks && (
        <Fragment>
          <p>Attacks</p>
          <ol>
            {attacks.fast && (
              <li>
                Fast{' '}
                <ul>
                  {attacks.fast.map(attack => (
                    <li key={attack.name}>
                      {attack.name} - {attack.damage} - {attack.type}
                    </li>
                  ))}
                </ul>
              </li>
            )}
            {attacks.special && (
              <li>
                Special{' '}
                <ul>
                  {attacks.special.map(attack => (
                    <li key={attack.name}>
                      {attack.name} - {attack.damage} - {attack.type}
                    </li>
                  ))}
                </ul>
              </li>
            )}
          </ol>
        </Fragment>
      )}

      {evolutions && (
        <Fragment>
          <p>Evolutions</p>
          <ul>
            {evolutions.map(evolution => (
              <li key={evolution.name}>
                <Link to={`/pokemon/${evolution.name}`}>
                  <img src={evolution.image} alt={evolution.name} />
                  <p>
                    {evolution.number}. {evolution.name}
                  </p>
                  <p>Types</p>
                  <ul>
                    {evolution.types.map(type => (
                      <li key={type}>{type}</li>
                    ))}
                  </ul>
                </Link>
              </li>
            ))}
          </ul>
        </Fragment>
      )}
    </Fragment>
  );
};

export default PokemonDetails;
