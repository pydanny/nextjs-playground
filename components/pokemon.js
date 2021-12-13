// Component
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
// import { Query } from '@favware/graphql-pokemon';
import { client } from './ApolloClient';

// interface GraphQLPokemonResponse<K extends keyof Omit<Query, '__typename'>> {
//   data: Record<K, Omit<Query[K], '__typename'>>;
// }

const GET_POKEMON_DETAILS = gql`
  {
    getPokemon(pokemon: pikachu) {
      sprite
      num
      species
      color
    }
  }
`;

export const Pokemon = () => {
  // const { loading, error, data } = useQuery<GraphQLPokemonResponse<'getPokemon'>>(GET_POKEMON_DETAILS, {
  const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
    client: client
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  for (const [key, value] of Object.entries(data.getPokemon)){
    console.log(`${key}: ${value}`);
  }

  return <div>
    <p>Num <span>{data.getPokemon.num}</span></p>
    <p>species <span>{data.getPokemon.species}</span></p>
    <p>color <span>{data.getPokemon.color}</span></p>    
    {/* {data.getPokemon.keys} */}


  </div>;
};