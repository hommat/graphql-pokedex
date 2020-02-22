export async function fetchGraphqlPokemonQuery<T>(query: string) {
  const response = await fetch('https://graphql-pokemon.now.sh', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  });

  const responseJSON = (await response.json()) as {
    data?: T;
    errors?: string[];
  };

  return responseJSON;
}
