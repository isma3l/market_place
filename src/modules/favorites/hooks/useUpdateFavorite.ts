import { ProductInterface } from '@/modules/core/models';
import { updateProduct } from '@/modules/core/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUpdateFavorite = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: (data: ProductInterface) => {
      queryClient.setQueryData(['favorites'], (oldData: ProductInterface[]) => {
        return oldData.filter((product) => product.id !== data.id);
      });
    },
  });

  return mutation;
};
