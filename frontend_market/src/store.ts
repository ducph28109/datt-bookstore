import { configureStore } from '@reduxjs/toolkit';
import authReducer from './services/auth.service';
import categoryReducer from './services/cate.service';
import productReducer from './services/product.service';
import userSlice from './services/user.service';
import userReducer from './slices/authSlice';
import productSlice from './slices/productSlice';
import cartReducer from './slices/cartSlice';
import orderApi from './services/order.service';
export const store = configureStore({
   reducer: {
      [authReducer.reducerPath]: authReducer.reducer,
      [categoryReducer.reducerPath]: categoryReducer.reducer,
      [productReducer.reducerPath]: productReducer.reducer,
      [userSlice.reducerPath]: userSlice.reducer,
      userReducer: userReducer,
      productSlice: productSlice,
      cart: cartReducer.reducer,
      [orderApi.reducerPath]: orderApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
         authReducer.middleware,
         categoryReducer.middleware,
         productReducer.middleware,
         userSlice.middleware,
         orderApi.middleware
      ])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
