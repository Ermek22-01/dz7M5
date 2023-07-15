import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalAmount: 0,
        count: 0
    },
    reducers: {
        addToCart: (state, action) =>
        {
            const { id, name, price } = action.payload;
            state.totalAmount = state.totalAmount + Number(~~price)
            state.count = state.count + 1;
            const itemIndex = state.items.findIndex(item => item.id === id);
            console.log(action.payload);
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity += 1;
            } else {
                state.items.push({
                    id,
                    name,
                    price,
                    quantity: 1
                });
            }
        },
        plusCount: (state, action) =>
        {
            const itemIndex = state.items.findIndex(item => item.id === action.payload)
            state.items[itemIndex].quantity += 1;
            state.totalAmount = state.totalAmount + Number(~~state.items[itemIndex].price)
            state.count = state.count + 1;
        },
        minusCount: (state, action) =>
        {
            const itemIndex = state.items.findIndex(item => item.id === action.payload)
            if (state.items[itemIndex].quantity > 1) {
                state.items[itemIndex].quantity -= 1;
                state.totalAmount = state.totalAmount - Number(~~state.items[itemIndex].price)
                state.count = state.count - 1;
            }
            else {
                const index = state.items.findIndex(item => item.id === action.payload)
                if (index !== -1) {
                    state.totalAmount = state.totalAmount - Number(~~state.items[itemIndex].price)
                    state.count = state.count - 1;
                    state.items.splice(index, 1)
                }
            }
        }
    }
});

export const { addToCart, plusCount, minusCount } = cartSlice.actions;

export default cartSlice.reducer;