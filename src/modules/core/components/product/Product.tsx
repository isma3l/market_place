import { ProductInterface } from '@/modules/core/models';
import { formatPrice } from '@/modules/core/utils';
import { Favorite } from '../favorite/Favorite';
import * as styles from './product.module.scss';

type Props = {
  product: ProductInterface;
  addProduct?: (product: ProductInterface) => void;
  updateFavorite: (id: string, value: number) => void;
  hideAddButton?: boolean;
};

export const Product = ({ product, addProduct, updateFavorite, hideAddButton }: Props) => {
  return (
    <article role='listitem' className={styles.product}>
      <Favorite
        isFavorite={product.favorite == 1}
        addFavorite={() => updateFavorite(product.id, 1)}
        removeFavorite={() => updateFavorite(product.id, 0)}
      />
      <figure className={styles.product__wrapperImage}>
        <img src={product.image_url} className={styles.product__image} alt='product image' />
      </figure>
      <div className={styles.product__contentName}>
        <span className={styles.product__name}>{product.productName}</span>
        <span className={styles.product__price}>{formatPrice(product.price)}</span>
      </div>
      <span className={styles.product__description}>{product.productDescription}</span>
      <div className={styles.product__contentStock}>
        <span className={styles.product__stock}>{`Stock: ${product.stock}`}</span>
        <button
          onClick={() => addProduct && addProduct(product)}
          disabled={product.stock === 0}
          className={`styles.product__button ${hideAddButton && styles.product__hide}`}
        >
          + Agregar
        </button>
      </div>
    </article>
  );
};
