import { ProductInterface } from '../models';
import { LIMIT_PAGE, URL } from '../constants';

type ParamsUpdate = {
  id: string;
  stock: number;
};

export const fetchProducts = async ({
  pageParam,
}: {
  pageParam: number;
}): Promise<ProductInterface[]> => {
  const res = await fetch(`${URL}?_start=${pageParam}&_limit=${LIMIT_PAGE}`);
  return res.json();
};

export const updateProductStock = async ({ id, stock }: ParamsUpdate) => {
  const res = await fetch(`${URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ stock }),
  });
  return await res.json();
};
