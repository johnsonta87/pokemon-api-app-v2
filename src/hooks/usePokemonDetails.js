import { useQuery } from 'react-query';
import { getDetails } from '../api/services';

export default function usePokemonDetails(id) {
  const { isLoading, error, data } = useQuery(['getDetails', id], async () => {
    if (id) {
      const res = await getDetails(id);

      console.log(res.data);
      return res.data;
    }

    return null;
  });

  return { isLoading, error, data };
}
