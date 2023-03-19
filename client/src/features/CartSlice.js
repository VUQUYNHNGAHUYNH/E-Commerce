import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
    items: [],
    isCartOpen: false,
  },
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    addToCart(state, action) {
      const existingItem = state.cartProducts.find(
        (product) => product.id === action.payload.id
      );
      if (existingItem) {
        existingItem.count += action.payload.count;
      } else {
        state.cartProducts.push(action.payload);
      }
    },
    increaseCount(state, action) {
      state.cartProducts = state.cartProducts.map((product) => {
        if (product.id === action.payload.id) {
          product.count++;
        }
        return product;
      });
    },
    decreaseCount(state, action) {
      state.cartProducts = state.cartProducts.map((product) => {
        if (product.id === action.payload.id && product.count > 1) {
          product.count--;
        }
        return product;
      });
    },
    removeFromCart(state, action) {
      const indexOfCart = state.cartProducts.indexOf(action.payload);
      state.cartProducts.splice(indexOfCart, 1);
    },
    setCartIsOpen(state, action) {
      state.isCartOpen = action.payload;
    },
    resetCart(state) {
      state.cartProducts = [];
    },
  },
});

export const {
  setItems,
  addToCart,
  increaseCount,
  decreaseCount,
  removeFromCart,
  setCartIsOpen,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
