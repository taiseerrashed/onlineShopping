import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        product: null,
        loading: false,
    },
    reducers: {
        setProducts(state, action){
            state.products = action.payload;
            state.loading = false;
        },
        setProduct(state, action){
            state.product = action.payload;
            state.loading = false;
        },
        setLoading(state){
            state.loading = true;
        },
        clearLoading(state){
            state.loading = false;
        },
    },
});

const productActions = productSlice.actions;
const productReducer = productSlice.reducer;

export {productActions, productReducer};
