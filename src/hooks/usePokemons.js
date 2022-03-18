import { useQuery } from 'react-query';
import { getPokemons } from '../api/services';

export default function usePokemons(name) {
  const { isLoading, error, data } = useQuery('getPokemons', async () => {
    const res = await getPokemons(name);

    return res.data;
  });

  return { isLoading, error, data };
}
