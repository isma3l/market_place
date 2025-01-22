import { fetchFavorites } from '@/modules/core/services';
import { useQuery } from '@tanstack/react-query';

export const useFetchFavorites = () => {
  const { data } = useQuery({
    queryKey: ['favorites'],
    queryFn: fetchFavorites,
  });

  return { favorites: data || [] };
};
