import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../interfaces/product';

const productApi = createApi({
   reducerPath: 'products',
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:8000/api'
   }),
   tagTypes: ['products'],
   endpoints: (builder) => ({
      getAllProducts: builder.query<{ product: IProduct[] }, void>({
         query: () => ({
            url: '/products',
            method: 'GET'
         }),
         providesTags: ['products']
      }),
      getProductById: builder.query({
         query: (id) => ({
            url: '/products/' + id,
            method: 'GET'
         }),
         providesTags: ['products']
      }),
      removeProduct: builder.mutation({
         query: (id: any) => ({
            url: '/products/' + id,
            method: 'DELETE'
         }),
         invalidatesTags: ['products']
      }),
      addProduct: builder.mutation({
         query: (item: any) => ({
            url: '/products',
            body: item,
            method: 'POST'
         }),
         invalidatesTags: ['products']
      }),
      updateProduct: builder.mutation({
         query: ({ id, item }) => ({
            url: '/products/' + id,
            body: item,
            method: 'PATCH'
         }),
         invalidatesTags: ['products']
      }),
      searchProduct: builder.mutation<{ product: IProduct[] }, string>({
         query: (search) => ({
            url: '/products?_q=' + search,
            method: 'GET'
         }),
         invalidatesTags: ['products']
      }),
      getRelatedProducts: builder.query({
         query: ({ idCategory, idProduct }) => {
            return {
               url: '/products/related/' + idCategory + '/' + idProduct
            };
         }
      }),
   })
});

export const {
   useGetAllProductsQuery,
   useGetProductByIdQuery,
   useAddProductMutation,
   useUpdateProductMutation,
   useRemoveProductMutation,
   useSearchProductMutation,
   useGetRelatedProductsQuery
} = productApi;

export default productApi;