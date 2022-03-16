import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cartShopping",
  initialState,
  reducers: {
    addItem(state, action) {
      const { price, id } = action.payload;
      const foodIndex = state.items.findIndex((item) => item.id === id);

      if (foodIndex !== -1) {
        state.items[foodIndex].quantity++;
      } else {
        state.items.push({
          ...action.payload,
          price: +price,
          quantity: 1,
        });
      }
      state.totalAmount += +price;
    },

    removeItem(state, action) {},
    checkout() {},
  },
});

const store = configureStore({ reducer: cartSlice.reducer });

export const cartActions = cartSlice.actions;
export default store;
