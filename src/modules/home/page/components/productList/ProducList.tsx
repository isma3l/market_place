import InfiniteScroll from 'react-infinite-scroll-component';
import { ProductInterface } from '@/modules/core/models';
import { MAX_PRODUCTS } from '@/modules/core/constants';
import { Product } from '@/modules/core/components';
import { useFetchProducts, useUpdateProduct } from '../../hooks';
import { useStore } from '@/modules/core/store';
import * as styles from './productList.module.scss';

export const ProductList = () => {
  const { products, fetchProducts } = useFetchProducts();
  const updateProduct = useUpdateProduct();
  const addProductToCart = useStore.use.addProduct();

  const handleAddProduct = (product: ProductInterface) => {
    if (updateProduct.isPending) return;
    if (product.stock > 0) {
      updateProduct.mutate(
        { id: product.id, stock: product.stock - 1 },
        { onSuccess: () => addProductToCart({ ...product }) },
      );
    }
  };

  const handleUpdateFavorite = (id: string, value: number) => {
    if (updateProduct.isPending) return;
    updateProduct.mutate({ id, favorite: value });
  };

  const hasMore = products.length < MAX_PRODUCTS;

  return (
    <div className={styles.container}>
      <InfiniteScroll
        dataLength={products.length}
        next={fetchProducts}
        hasMore={hasMore}
        loader={<h4>Cargando...</h4>}
        height={'93vh'}
      >
        <section role='list' aria-label='List of products' className={styles.container__list}>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addProduct={handleAddProduct}
              updateFavorite={handleUpdateFavorite}
            />
          ))}
        </section>
      </InfiniteScroll>
    </div>
  );
};
