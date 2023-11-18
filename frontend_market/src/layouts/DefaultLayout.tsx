import React from 'react';
import Header from '../components/layout/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/layout/Footer'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetTokenQuery } from '../services/auth.service';
import { saveTokenAndUser } from '../slices/authSlice';
import { setCartName, setItem } from '../slices/cartSlice';

const DefaultLayout = () => {
   const { data } = useGetTokenQuery();
   const dispatch = useDispatch();
   useEffect(() => {
      if (data?.body.data && data?.body.data.accessToken) {
         dispatch(saveTokenAndUser({ accessToken: data?.body.data.accessToken, user: data?.body.data.data }));
         dispatch(setCartName(data?.body.data ? data?.body.data?.data.email : 'cart'));
       
      }
      dispatch(setItem());
    
   }, [data]);
   return (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   );
};

export default DefaultLayout;
