import * as styles from './favoriteList.module.scss';
import { Product } from '@/modules/core/components';
import { useFetchFavorites, useUpdateFavorite } from '../../hooks';

export const FavoriteList = () => {
  const { favorites } = useFetchFavorites();
  const updateFavorite = useUpdateFavorite();

  const handleUpdateFavorite = (id: string, value: number) => {
    if (updateFavorite.isPending) return;
    updateFavorite.mutate({ id, favorite: value });
  };

  return (
    <section role='list' aria-label='List of favorites' className={styles.container__list}>
      {favorites.map((favorite) => (
        <Product
          key={favorite.id}
          product={favorite}
          hideAddButton={true}
          updateFavorite={handleUpdateFavorite}
        />
      ))}
    </section>
  );
};
