import { useQuery } from 'react-query';
import { queryUrl } from '../api/services';

export default function useApiQuery(url) {
  const { isLoading, error, data, refetch } = useQuery(
    ['getData', url],
    async () => {
      const res = await queryUrl(url);

      return res.data.chain;
    }
  );

  return { isLoading, error, data, refetch };
}
