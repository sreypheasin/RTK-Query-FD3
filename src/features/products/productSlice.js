import { apiSlice } from "../api/apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // GET ALL
    getAllProducts: builder.query({
      query: () => ({
        url: `https://dummyjson.com/products`,
        method: "GET"
      })
    }),
    // GET BY ID
    getProductById: builder.query({
      query: (id) => ({
        url: `https://dummyjson.com/products/${id}`,
        method: "GET"
      })
    })
  })
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } =
  productApiSlice;
