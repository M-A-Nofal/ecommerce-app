import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fechProducts = createAsyncThunk('productsSlice/fechProducts', async () => {
    const res = await fetch ('https://dummyjson.com/products');
    const data = await res.json();
    return data.products;
})


export const productsSlice = createSlice({
    initialState: [],
    name: 'productsSlice',
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fechProducts.fulfilled, (state, action) => {
            return action.payload;
        })
    }
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;