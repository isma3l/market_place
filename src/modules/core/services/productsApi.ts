import { ProductInterface } from '../models';
import { LIMIT_PAGE, URL } from '../constants';

type ParamsUpdate = {
  id: string;
  stock?: number;
  favorite?: number;
};

export const fetchProducts = async ({
  pageParam,
}: {
  pageParam: number;
}): Promise<ProductInterface[]> => {
  const res = await fetch(`${URL}?_start=${pageParam}&_limit=${LIMIT_PAGE}`);
  return res.json();
};

export const updateProduct = async ({ id, stock, favorite }: ParamsUpdate) => {
  const body = {
    ...(stock !== undefined && { stock }),
    ...(favorite !== undefined && { favorite }),
  };

  const res = await fetch(`${URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return await res.json();
};

export const fetchFavorites = async (): Promise<ProductInterface[]> => {
  const res = await fetch(`${URL}?favorite=1`);
  return res.json();
};
