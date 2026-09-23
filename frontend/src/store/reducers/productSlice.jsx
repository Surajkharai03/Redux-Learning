import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",

  initialState,

  reducers: {

    // LOAD PRODUCTS
    loadproducts: (state, action) => {
      state.products = action.payload;
    },

    // UPDATE PRODUCT
    updateproduct: (state, action) => {
      const index = state.products.findIndex(
        (product) =>
          String(product.id) === String(action.payload.id)
      );

      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },

    // DELETE PRODUCT
    deleteproduct: (state, action) => {
      state.products = state.products.filter(
        (product) =>
          String(product.id) !== String(action.payload)
      );
    },
  },
});

export default productSlice.reducer;

export const {
  loadproducts,
  updateproduct,
  deleteproduct,
} = productSlice.actions;