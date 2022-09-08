import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addInCart: (state, action) => {
      const product = {
        details: action.payload,
        quantity: 1,
      };
      state.cart.push(product);
    },
    removeProduct: (state, action) => {
      let index = state.cart.findIndex(
        (item) => item.details.id === action.payload
      );
      state.cart.splice(index, 1);
    },
    incrementQuantity: (state, action) => {
      let index = state.cart.findIndex(
        (item) => item.details.id === action.payload
      );
      state.cart[index].quantity += 1;
    },
    decrementQuantity: (state, action) => {
      let index = state.cart.findIndex(
        (item) => item.details.id === action.payload
      );
      let quantity = state.cart[index].quantity - 1;
      if (quantity > 0) {
        state.cart[index].quantity = quantity;
      }
    },
  },
});

export const {
  addInCart,
  incrementQuantity,
  decrementQuantity,
  removeProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
