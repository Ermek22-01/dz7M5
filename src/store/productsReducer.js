import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () =>
    {
        const resp = await axios.get('https://fakerapi.it/api/v1/products?_quantity=20')
        return resp.data
    }

)
const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: ''
    },
    reducers: {},
    extraReducers: builder =>
    {
        builder.addCase(fetchProducts.pending, state =>
        {
            state.loading = true
            state.error = ''
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) =>
        {

            state.loading = false
            state.error = ''
            state.products = action.payload.data
        })
        builder.addCase(fetchProducts.rejected, (state, action) =>
        {
            state.loading = false
            state.products = []
            state.error = action.error.message
        })
    }
}
)
export default productsSlice.reducer