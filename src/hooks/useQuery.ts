import { useState, useEffect, useRef } from 'react';

import { fetchGraphqlPokemonQuery } from '../utils/api';

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

      const response = await fetchGraphqlPokemonQuery<T>(query);

      if (isMounted.current) {
        const data = response.data || null;
        setState(prevState => ({ ...prevState, data, loading: false }));
      }
    };

    fetchData();
  }, [query]);

  return state;
}
