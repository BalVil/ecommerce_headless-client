import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtoCart: (state, { payload }) => {
      const item = state.products.find(product => product.id === payload.id);

      if (item) {
        item.quantity += payload.quantity;
      } else {
        state.products.push(payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtoCart } = cartSlice.actions;

export default cartSlice.reducer;
