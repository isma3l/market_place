import favorite from '@/assets/png/favorite.png';
import nofavorite from '@/assets/png/nofavorite.png';
import * as styles from './favorite.module.scss';

type Props = {
  isFavorite: boolean;
  addFavorite: () => void;
  removeFavorite: () => void;
};

export const Favorite = ({ isFavorite, addFavorite, removeFavorite }: Props) => {
  return (
    <figure className={styles.content}>
      <img
        src={isFavorite ? favorite : nofavorite}
        className={styles.content__image}
        alt='favorite image'
        onClick={() => (isFavorite ? removeFavorite() : addFavorite())}
      />
    </figure>
  );
};
