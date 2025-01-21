import { create } from 'zustand';
import { CartItemInterface, ProductInterface } from '../models';
import { createSelectors } from './createSelectors';

type State = {
  cart: CartItemInterface[];
};

type Actions = {
  addProduct: (newItem: ProductInterface) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
};

const useCartStore = create<State & Actions>((set, get) => ({
  cart: [],
  addProduct: (newItem: ProductInterface) => {
    set((state) => {
      return state.cart.find(({ product }) => product.id === newItem.id)
        ? {
            cart: state.cart.map((item) => {
              return item.product.id === newItem.id ? { ...item, amount: item.amount + 1 } : item;
            }),
          }
        : { cart: [...state.cart, { product: { ...newItem }, amount: 1 }] };
    });
  },
  increase: (id: string) => {
    set((state) => ({
      cart: state.cart.map((item) => {
        return item.product.id === id ? { ...item, amount: item.amount + 1 } : item;
      }),
    }));
  },
  decrease: (id: string) => {
    set((state) => {
      return state.cart.find(({ product }) => product.id === id)?.amount === 1
        ? { cart: state.cart.filter((item) => item.product.id !== id) }
        : {
            cart: state.cart.map((item) => {
              return item.product.id === id ? { ...item, amount: item.amount - 1 } : item;
            }),
          };
    });
  },
}));

export const useStore = createSelectors(useCartStore);
