import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { client } from './ApolloClient';

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

export function getPokemonData() {
  const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
    client: client
  });
  return data
}
