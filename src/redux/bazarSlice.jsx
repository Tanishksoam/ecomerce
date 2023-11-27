import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  UserInfo: null,
};

export const bazarSlice = createSlice({
  name: "bazar",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
      // state.productData = [...state.productData, action.payload];
      // state.productData = action.payload;
    },
  },
});

export const { addToCart } = bazarSlice.actions;
export default bazarSlice.reducer;
