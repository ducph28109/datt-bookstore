import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IOrder, IOrderFull } from '../interfaces/oder';
import { IQueryParam, IResponseHasPaginate } from '../interfaces/base';
const orderApi = createApi({
    reducerPath: 'orders',
   baseQuery: fetchBaseQuery({
    
      baseUrl: 'http://localhost:8000/api',
      credentials: 'include',
      prepareHeaders: (headers) => {
         headers.set('Access-Control-Allow-Origin', '*');
         headers.set('Access-Control-Allow-Methods', 'GET, POST, PATCH,PUT, DELETE');
         headers.set('Access-Control-Allow-Headers', 'Content-Type');
         return headers;
      }
   }),
   tagTypes: ['orders'],
  
   endpoints: (builder) => ({
      getAllOrder: builder.query<IResponseHasPaginate<IOrderFull>, Partial<Omit<IQueryParam, '  '>>>({
         query: (params) => {
            return {
               url: '/orders',
               params
            };
         },
         providesTags: ['orders']
      }),
      addOrder: builder.mutation<IOrder, object>({
         query: (body) => {
            return {
               url: '/orders',
               method: 'post',
               body: body
            };
         }
      }),
      updateOrder: builder.mutation<IOrder, IOrder & { idOrder: string }>({
         query: ({ idOrder, ...body }) => {
            return {
               url: '/orders/' + idOrder,
               method: 'PATCH',
               body: body
            };
         },
         invalidatesTags: ['orders']
      })
   })
});

export const { useAddOrderMutation, useUpdateOrderMutation, useGetAllOrderQuery } = orderApi;

export default orderApi;
