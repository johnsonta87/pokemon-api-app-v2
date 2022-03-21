import { useQuery } from 'react-query';
import { queryUrl } from '../api/services';

export default function useApiQuery(url) {
  const { isLoading, error, data } = useQuery('getData', async () => {
    const res = await queryUrl(url);

    return res.data;
  });

  return { isLoading, error, data };
}
