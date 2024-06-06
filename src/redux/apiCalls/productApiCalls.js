import { productActions } from "../slices/productSlice";

// fetch all products
export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            dispatch(productActions.setLoading());
            const response = await fetch("http://localhost:5000/products");
            const data = await response.json();
            dispatch(productActions.setProducts(data));
        } catch (error) {
            console.log(error);
            dispatch(productActions.clearLoading());
        }
    };
};

// get product by id
export const getProductById = (productId) => {
    return async (dispatch) => {
        try {
            dispatch(productActions.setLoading());
            const response = await fetch(`http://localhost:5000/products/${productId}`);
            const data = await response.json();
            dispatch(productActions.setProduct(data));
        } catch (error) {
            console.log(error);
            dispatch(productActions.clearLoading());
        }
    };
};
