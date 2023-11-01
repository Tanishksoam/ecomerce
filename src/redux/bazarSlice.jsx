import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};
function addToCart(state=initialState, action) {
    let newState = {productData: state.productData,userInfo:null}
  const item = newState.productData.find(
    (item) => item._id === action.payLoad._id
  );

  if (item) {
    item.quanitiy += action.payLoad.quantity;
  } else {
    newState.productData.push(action.payLoad);
  }
  return newState
}
export const bazarslice = createSlice({
  name: "bazar",
  initialState,
  reducer: { addToCart },
});
// const bazarslice = configureStore({reducer:addToCart})


// export const { addToCart } = bazarslice.actions;
// export default bazarslice.reducer;
export default bazarslice;
