import InfiniteScroll from 'react-infinite-scroll-component';
import { ProductInterface } from '@/modules/core/models';
import { useStore } from '@/modules/core/store';
import { MAX_PRODUCTS } from '@/modules/core/constants';
import { Product } from '@/modules/core/components';
import { useProducts, useUpdateStock } from '../../hooks';
import * as styles from './productList.module.scss';

export const ProductList = () => {
  const { products, fetchProducts, status } = useProducts();
  const updateProductStock = useUpdateStock();
  const addProductToCart = useStore.use.addProduct();

  const handleAddProduct = (product: ProductInterface) => {
    if (updateProductStock.isPending) return;
    if (product.stock > 0) {
      updateProductStock.mutate(
        { id: product.id, stock: product.stock - 1 },
        { onSuccess: () => addProductToCart({ ...product }) },
      );
    }
  };

  const hasMore = products.length < MAX_PRODUCTS;

  if (status === 'error') return <h4>Error obteniendo el listado de productos</h4>;

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
            <Product key={product.id} product={product} addProduct={handleAddProduct} />
          ))}
        </section>
      </InfiniteScroll>
    </div>
  );
};
