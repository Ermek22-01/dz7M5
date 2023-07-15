import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./productsReducer.js";
import cartReducer from "./cartReducer.js";

export const store = configureStore ({
    reducer: {
        products : productsReducer,
        cart: cartReducer
    }
})