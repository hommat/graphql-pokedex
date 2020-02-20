import { useState, useEffect, useRef } from 'react';

function fetchPokemonQuery(query: string) {
  return fetch('https://graphql-pokemon.now.sh', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  });
}

export default function<T>(query: string) {
  const isMounted = useRef<boolean>(true);
  const [state, setState] = useState<{ loading: boolean; data: null | T }>({
    loading: true,
    data: null
  });

  useEffect(
    () => () => {
      isMounted.current = false;
    },
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      setState(prevState => ({ ...prevState, loading: true }));

      const res = await fetchPokemonQuery(query);
      const resJSON = (await res.json()) as { data?: T; errors?: string[] };

      if (isMounted.current) {
        const data = resJSON.data || null;
        setState(prevState => ({ ...prevState, data, loading: false }));
      }
    };

    fetchData();
  }, [query]);

  return state;
}
