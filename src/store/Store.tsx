import { configureStore, createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: JSON.parse(localStorage.getItem("userCart")|| 'null') 
    || {
      id: "",
      name: "",
      items: [],
      
    },

    reducers: {
        clearCart(state) {
            state.items = [];
            state.name = "";
            state.id = "";
          },
    },

    
})
export const cartAction = orderSlice.actions;

const store = configureStore({
    reducer: {cart: orderSlice.reducer},
});

export default store;