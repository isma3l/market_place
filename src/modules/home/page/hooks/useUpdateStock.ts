import { updateProductStock } from '@/modules/core/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUpdateStock = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateProductStock,
    onSuccess: (data) => {
      console.log('ok patch succes', data);
      queryClient.setQueryData(['products'], (oldData) => {
        const newData = oldData?.pages.map((page) =>
          page.map((item: { id: string }) => {
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
