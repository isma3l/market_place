import { ProductInterface } from '@/modules/core/models';
import { updateProduct } from '@/modules/core/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: (data: ProductInterface) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      queryClient.setQueryData(['products'], (oldData: { pages: any[] }) => {
        const newData = oldData?.pages.map((page) =>
          page.map((item: ProductInterface) => {
            return item.id === data.id ? data : item;
          }),
        );
        return {
          ...oldData,
          pages: newData,
        };
      });
    },
  });
  return mutation;
};
