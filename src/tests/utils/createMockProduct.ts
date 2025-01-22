import { faker } from '@faker-js/faker';
import { ProductInterface } from '@/modules/core/models';

export const createMockProduct = (length: number): ProductInterface[] => {
  const products: ProductInterface[] = Array.from({ length }).map(() => ({
    id: faker.string.uuid(),
    image_url: faker.image.url(),
    stock: faker.number.int(),
    productName: faker.commerce.productName(),
    price: parseInt(faker.commerce.price()),
    productDescription: faker.commerce.productDescription(),
    favorite: 0,
  }));

  return products;
};
