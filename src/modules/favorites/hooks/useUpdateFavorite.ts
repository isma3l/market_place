import { updateProduct } from '@/modules/core/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUpdateFavorite = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });

  return mutation;
};
