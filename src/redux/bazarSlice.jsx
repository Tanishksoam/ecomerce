import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const bazarSlice = createSlice({
  name: "bazar",
  initialState,
  reducer: {
    addToCart: (state, action) => {
      state.productData = action.payLoad;
    },
  },
});


export const {addToCart} = bazarSlice.actions;

export default bazarSlice.reducer;

// export default bazarSlice;
