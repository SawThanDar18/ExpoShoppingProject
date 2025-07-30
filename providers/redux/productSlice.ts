import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  product: {
    id: number;
    brand: string;
    title: string;
    star: number;
    quantity: number;
    price: number;
    discount: number;
    image: any;  
    favourite: boolean;
  } | null;
}

const initialState: ProductState = {
  product: {
    id: 1,
    brand: "",
    title: "",
    star: 0,
    quantity: 0,
    price: 0,
    discount: 0,  
    image: "",
    favourite: false,
  },
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
