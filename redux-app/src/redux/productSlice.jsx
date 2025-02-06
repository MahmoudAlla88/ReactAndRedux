import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch("https://6784b1391ec630ca33a53263.mockapi.io/product");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return await response.json();
});

const productSlice = createSlice({
  name: "products",
  initialState: { products: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading"; 
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded"; 
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed"; 
      });
  },
});

export default productSlice.reducer;
