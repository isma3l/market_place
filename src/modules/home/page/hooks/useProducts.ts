import { useInfiniteQuery } from '@tanstack/react-query';
import { LIMIT_PAGE } from '@/modules/core/constants';
import { fetchProducts } from '@/modules/core/services';

export const useProducts = () => {
  const { data, fetchNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    initialPageParam: 0,
    getNextPageParam: (_, pages) => pages.length * LIMIT_PAGE,
  });

  return {
    products: data?.pages.flat() ?? [],
    fetchProducts: () => !isFetchingNextPage && fetchNextPage(),
    isFetchingNextPage,
    status,
  };
};
