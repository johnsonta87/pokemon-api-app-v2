import { useQuery } from 'react-query';
import { getSpecies } from '../api/services';

export default function usePokemonSpecies(id) {
  const { isLoading, error, data } = useQuery(['getSpecies', id], async () => {
    if (id) {
      const res = await getSpecies(id);

      return res.data;
    }

    return null;
  });

  return { isLoading, error, data };
}
