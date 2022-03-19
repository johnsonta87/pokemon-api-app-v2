import { useQuery } from 'react-query';
import { getDetails } from '../api/services';

export default function usePokemonDetails(id) {
  const { isLoading, error, data } = useQuery('getDetails', async () => {
    const res = await getDetails(id);

    return res.data;
  });

  return { isLoading, error, data };
}
