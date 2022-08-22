import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
  totalProducts: 0,
};

const cartSlice = createSlice({
  name: "cartShopping",
  initialState,
  reducers: {
    addItem(state, action) {
      const { price, id } = action.payload;
      let foodIndex = state.items.findIndex((item) => item.id === id);
      state.totalProducts++;
      if (foodIndex !== -1) {
        state.items[foodIndex].quantity++;
        state.items[foodIndex].totalAmount += +price;
      } else {
        state.items.push({
          ...action.payload,
          totalAmount: +price,
          price: +price,
          quantity: 1,
        });
        foodIndex = state.items.length - 1;
      }

      state.totalAmount += state.items[foodIndex].price;
    },

    removeItem(state, action) {
      const { id } = action.payload;
      const foodIndex = state.items.findIndex((item) => item.id === id);

      state.totalProducts -= state.items[foodIndex].quantity;
      state.totalAmount -= state.items[foodIndex].totalAmount;
      state.items.splice(foodIndex, 1); //remove item from state.items
    },
    decrement(state, action) {
      const { id } = action.payload;
      const foodIndex = state.items.findIndex((item) => item.id === id);

      state.totalProducts--;
      state.totalAmount -= state.items[foodIndex].price;

      if (state.items[foodIndex].quantity === 1)
        state.items.splice(foodIndex, 1); //remove item from state.items
      else {
        state.items[foodIndex].quantity--;
        state.items[foodIndex].totalAmount =
          state.items[foodIndex].totalAmount - state.items[foodIndex].price;
      }
    },

    increment(state, action) {
      const { id } = action.payload;
      const foodIndex = state.items.findIndex((item) => item.id === id);

      state.totalProducts++;
      state.items[foodIndex].quantity++;
      state.items[foodIndex].totalAmount =
        state.items[foodIndex].totalAmount + state.items[foodIndex].price;
      state.totalAmount += state.items[foodIndex].price;
    },
    checkout() {},
  },
});

const store = configureStore({ reducer: cartSlice.reducer });

export const cartActions = cartSlice.actions;
export default store;
